import WebSocket from 'ws'
import fs from 'fs'
import path from 'path'
import https from 'https'
import { IncomingMessage } from 'http'
import { TLSSocket } from 'tls'
import { ChargingStation } from './charging-station'
import {
  Logger,
  OcppErrorResponseMessageDto,
  OcppResponseMessageDto,
  OcppErrorCodeEnum,
  OcppRequestMessageDto,
  MessageValidator,
  ResponseBaseDto,
  CsmsError,
} from '@yellowgarbagebag/csms-shared'
import { arrayToRequestMessage } from './utils'

export class WebSocketServer {
  protected logger: Logger = new Logger('Core')
  private server: https.Server | undefined
  private chargingStations: ChargingStation[] = [
    new ChargingStation('LS001', 'LS001', 'test'),
    new ChargingStation('LS002', 'LS002', 'test'),
  ]

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
        const result: string = this.handleIncomingMessage(cs, msg.data)
        socket.send(result)
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

    return this.chargingStations.find(
      (cs) => cs.uniqueIdentifier === uniqueIdentifier && cs.username === username && cs.password === password,
    )
  }

  protected handleIncomingMessage(cs: ChargingStation, data: any): string {
    // Brauche im Fehlerfall
    let requestMessage: OcppRequestMessageDto | undefined

    try {
      if (data) {
        cs.logger.debug('Received', JSON.parse(data.toString()))
      }

      // Das "Array" validieren
      requestMessage = arrayToRequestMessage(data)
      // Kombi aus Action und Payload validieren
      MessageValidator.instance.validateRequestPayload(requestMessage)

      // Verarbeitung der Daten
      cs.logger.info(`-IN-  ${requestMessage.action}`)
      const payload: ResponseBaseDto = cs.messageReceived(requestMessage.action, requestMessage.payload)

      // Antwortobjekt erstellen
      const responseMessage: OcppResponseMessageDto = new OcppResponseMessageDto(requestMessage.messageId, payload)
      // Anwortdaten validieren
      try {
        MessageValidator.instance.validateResponsePayload(responseMessage, requestMessage.action)
      } catch (err) {
        if (err instanceof CsmsError) {
          cs.logger.error(`Server send invalid data | ${err.errorCode} | ${err.errorDescription}`)
        } else {
          throw err
        }
      }
      // Loggen und senden
      const response: string = responseMessage.toString()
      cs.logger.info(`-OUT- ${requestMessage.action}`)
      cs.logger.debug('Send', responseMessage)
      return response
    } catch (err) {
      const logger: Logger = cs?.logger || this.logger
      const messageId: string = requestMessage?.messageId || ''

      if (err instanceof CsmsError) {
        logger.warn(`Error | ${err.errorCode} | ${err.errorDescription}`)
        const errorResponseMessage = new OcppErrorResponseMessageDto(messageId, err.errorCode, err.errorDescription)
        return errorResponseMessage.toString()
      } else if (err instanceof OcppErrorResponseMessageDto) {
        // Dieser Fall kommt vor, wenn es schon beim Validieren des Call Arrays kracht.
        logger.warn(`Error | ${err.errorCode} | ${err.errorDescription}`)
        return err.toString()
      } else {
        logger.fatal('Internal Server Error')
        logger.fatal(err)
        const errorResponseMessage = new OcppErrorResponseMessageDto(messageId, OcppErrorCodeEnum.InternalError)
        return errorResponseMessage.toString()
      }
    }
  }
}
