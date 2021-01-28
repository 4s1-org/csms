import WebSocket from 'ws'
import fs from 'fs'
import path from 'path'
import https from 'https'
import { IncomingMessage } from 'http'
import { TLSSocket } from 'tls'
import { ChargingStation } from './charging-station'
import {
  Logger,
  OcppErrorCodeEnum,
  ResponseBaseDto,
  CsmsError,
  OcppBaseCallDto,
  CallConverter,
  OcppRequestCallDto,
  PayloadConverter,
  OcppResponseCallDto,
  OcppErrorCallDto,
  CsmsCallValidationError,
  PayloadValidator,
} from '@yellowgarbagebag/csms-shared'
import { DataProvider } from './data-provider'

export class WebSocketServer {
  protected logger: Logger = new Logger('Core')
  private server: https.Server | undefined

  constructor(public readonly port: number = 3000) {
    // nothing to do
  }

  public startServer(): void {
    const wss = new WebSocket.Server({
      noServer: true,
      //path: '/ocpp',
    })
    wss.on('connection', (socket: WebSocket, request: IncomingMessage, cs: ChargingStation): void => {
      socket.onclose = (): void => {
        cs.disconnect()
      }

      socket.onerror = (err: any): void => {
        this.logger.error('Error' + err)
      }

      socket.onmessage = (msg: WebSocket.MessageEvent): void => {
        const result: string | undefined = this.handleIncomingCall(cs, msg.data)
        if (result) {
          socket.send(result)
        }
      }
    })

    this.server = https.createServer({
      cert: fs.readFileSync(path.join(__dirname, '..', 'third-party', 'certificates', 'localhost.crt')),
      key: fs.readFileSync(path.join(__dirname, '..', 'third-party', 'certificates', 'localhost.key')),
    })

    this.server.on('upgrade', (request: IncomingMessage, tlsSocket: TLSSocket, head: Buffer): void => {
      const cs: ChargingStation | undefined = this.authenticate(request)

      if (!cs) {
        this.logger.error(`Client not accepted`)
        tlsSocket.write('HTTP/1.1 401 Unauthorized\r\n\r\n')
        tlsSocket.destroy()
        return
      }

      wss.handleUpgrade(request, tlsSocket, head, (socket: WebSocket, request: IncomingMessage): void => {
        wss.emit('connection', socket, request, cs)
      })
    })

    this.server.listen(this.port)
    this.logger.info(`WebSocketServer is running on port ${this.port}`)
  }

  public stopServer(): void {
    if (this.server) {
      this.server.close()
    }
    this.logger.info(`WebSocketServer stopped`)
  }

  private authenticate(request: IncomingMessage): ChargingStation | undefined {
    const socketId = request.headers['sec-websocket-key']
    this.logger.info(`Client connected: ${socketId}`)

    // ToDo: Das muss schöner werden
    const parts = request.url?.split('/')
    if (!parts || parts[1] !== 'ocpp' || parts.length !== 3) {
      this.logger.error(`Client URL is invalid "${request.url}"`)
      return undefined
    }

    const uniqueIdentifier = parts[2]
    const b64auth = (request.headers.authorization || '').split(' ')[1] || ''
    const [username, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    const cs = DataProvider.instance.getChargingStation(uniqueIdentifier)
    if (cs && cs.checkCredentials(username, password)) {
      return cs
    } else {
      return undefined
    }
  }

  private handleIncomingCall(cs: ChargingStation, data: any): string | undefined {
    // Brauche im Fehlerfall
    let call: OcppBaseCallDto | undefined

    try {
      cs.logger.debug('Received', data)
      // Das "Array" validieren
      call = CallConverter.instance.convert(data)

      if (call instanceof OcppRequestCallDto) {
        cs.logger.info(`Incoming Request | ${call.action} | ${call.messageId}`)
        PayloadValidator.instance.validateRequest(call)
        PayloadConverter.instance.convertRequest(call)
        // Verarbeitung der Daten
        const responsePayload: ResponseBaseDto = cs.incomingRequestCall(call.payload)
        // Antwortobjekt erstellen
        const responseCall = new OcppResponseCallDto(call.messageId, responsePayload)
        // Anwortdaten validieren (nice to have)
        try {
          PayloadValidator.instance.validateResponse(responseCall, call.action)
        } catch (err) {
          if (err instanceof CsmsError) {
            cs.logger.error(`Server send invalid data | ${err.errorCode} | ${err.errorDescription}`)
          } else {
            throw err
          }
        }
        // Loggen und senden
        cs.logger.info(`Outgoing Response | ${call.action} | ${call.messageId}`)
        cs.logger.debug('Send', responseCall)
        return responseCall.toString()
      } else if (call instanceof OcppResponseCallDto) {
        const action = cs.getActionToRequest(call.messageId)
        cs.logger.info(`Incoming Response | ${action} | ${call.messageId}`)
        PayloadValidator.instance.validateResponse(call, action)
        PayloadConverter.instance.convertResponse(call, action)
        cs.incomingResponseCall(call.payload)
        // Auf eine Antwort wird keine Antwort gesendet
        return undefined
      } else if (call instanceof OcppErrorCallDto) {
        const action = cs.getActionToRequest(call.messageId)
        cs.logger.info(`Incoming Error | ${action} | ${call.messageId}`)
        cs.incomingErrorCall(call)
        // Auf einen Fehler wird keine Antwort gesendet
        return undefined
      } else {
        // Das kann eigentlich nie passieren
        throw new CsmsError(OcppErrorCodeEnum.InternalError, 'Unknown call')
      }
    } catch (err) {
      const logger: Logger = cs?.logger || this.logger

      if (err instanceof CsmsCallValidationError) {
        logger.warn(`Validation Error | ${err.errorCode} | ${err.errorDescription}`)
        return new OcppErrorCallDto(err.messageId, err.errorCode, err.errorDescription).toString()
      } else if (err instanceof CsmsError) {
        const messageId: string = call?.messageId || ''
        logger.warn(`Csms Error | ${err.errorCode} | ${err.errorDescription}`)
        return new OcppErrorCallDto(messageId, err.errorCode, err.errorDescription).toString()
      } else {
        const messageId: string = call?.messageId || ''
        logger.fatal('Internal Server Error')
        logger.fatal(err)
        return new OcppErrorCallDto(messageId, OcppErrorCodeEnum.InternalError).toString()
      }
    }
  }
}
