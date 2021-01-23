import WebSocket from 'ws'
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
import { IncomingMessage } from 'http'
import { ChargingStation } from './charging-station'
import { arrayToRequestMessage } from './utils'
import fs from 'fs'
import path from 'path'
import https from 'https'

export class WebSocketServer {
  private server: WebSocket.Server | undefined
  private logger = new Logger('Core')

  constructor(public readonly host: string = '127.0.0.1', public readonly port: number = 3000) {
    // nothing to do
  }

  public stop(): void {
    if (this.server) {
      this.server.close()
    }
    this.logger.info(`WebSocketServer stopped`)
  }

  public start(): void {
    const chargingStations: ChargingStation[] = []

    const server = https.createServer({
      cert: fs.readFileSync(path.join(__dirname, 'certificates', 'localhost-chain.pem')),
      key: fs.readFileSync(path.join(__dirname, 'certificates', 'localhost.key')),
    })

    this.server = new WebSocket.Server({
      server,
      //host: this.host,
      //port: this.port,
    })

    this.logger.info(`WebSocketServer is running on ${this.server.options.host}:${this.server.options.port}`)

    this.server.on('connection', (socket: WebSocket, request: IncomingMessage) => {
      const socketId = request.headers['sec-websocket-key']
      this.logger.info(`Client connected: ${socketId}`)

      let cs: ChargingStation | undefined

      const parts = request.url?.split('/')
      if (parts && parts[1] === 'ocpp' && parts[2] === '2.0.1' && parts.length >= 4) {
        const uniqueIdentifier = parts[3]
        cs = chargingStations.find((x) => x.uniqueIdentifier === uniqueIdentifier)
        if (!cs) {
          cs = new ChargingStation(uniqueIdentifier)
          chargingStations.push(cs)
        }
        cs.connect()
      } else {
        this.logger.error(`Client URL is invalid "${request.url}"`)
      }

      socket.onclose = (): void => {
        if (cs) {
          cs.disconnect()
        }
      }

      socket.onerror = (err: any): void => {
        // this.logger.error('Error' + err)
      }

      socket.onmessage = (msg: WebSocket.MessageEvent): void => {
        // Brauche im Fehlerfall
        let requestMessage: OcppRequestMessageDto | undefined

        try {
          if (cs) {
            cs.logger.debug(`Received`, msg.data)
            // Das "Array" validieren
            requestMessage = arrayToRequestMessage(msg.data)
            // Kombi aus Action und Payload validieren
            MessageValidator.instance.validateRequestPayload(requestMessage)

            // Verarbeitung der Daten
            const payload: ResponseBaseDto = cs.messageReceived(requestMessage.action, requestMessage.payload)

            // Antwortobjekt erstellen
            const responseMessage: OcppResponseMessageDto = new OcppResponseMessageDto(
              requestMessage.messageId,
              payload,
            )
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
            cs.logger.debug('Send', response)
            socket.send(response)
          }
        } catch (err) {
          const logger: Logger = cs?.logger || this.logger
          const messageId: string = requestMessage?.messageId || ''

          if (err instanceof CsmsError) {
            logger.warn(`Error | ${err.errorCode} | ${err.errorDescription}`)
            const errorResponseMessage = new OcppErrorResponseMessageDto(messageId, err.errorCode, err.errorDescription)
            socket.send(errorResponseMessage.toString())
          } else if (err instanceof OcppErrorResponseMessageDto) {
            // Dieser Fall kommt vor, wenn es schon beim Validieren des Call Arrays kracht.
            logger.warn(`Error | ${err.errorCode} | ${err.errorDescription}`)
            socket.send(err.toString())
          } else {
            logger.fatal('Internal Server Error', err)
            const errorResponseMessage = new OcppErrorResponseMessageDto(messageId, OcppErrorCodeEnum.InternalError)
            socket.send(errorResponseMessage.toString())
          }
        }
      }
    })
  }
}
