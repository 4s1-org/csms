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

export abstract class WebSocketServerBase {
  protected logger: Logger = new Logger('Core')
  private chargingStations: ChargingStation[] = []

  constructor(public readonly port: number = 3000) {
    // nothing to do
  }

  public abstract stop(): void

  public abstract start(): void

  protected onConnection(socket: WebSocket, request: IncomingMessage): void {
    const socketId = request.headers['sec-websocket-key']
    this.logger.info(`Client connected: ${socketId}`)

    let cs: ChargingStation | undefined

    const parts = request.url?.split('/')
    if (parts && parts[1] === 'ocpp' && parts[2] === '2.0.1' && parts.length >= 4) {
      const uniqueIdentifier = parts[3]
      cs = this.chargingStations.find((x) => x.uniqueIdentifier === uniqueIdentifier)
      if (!cs) {
        cs = new ChargingStation(uniqueIdentifier)
        this.chargingStations.push(cs)
      }
      cs.connect()
    } else {
      this.logger.error(`Client URL is invalid "${request.url}"`)
    }

    socket.onclose = (): void => {
      if (cs) {
        this.onClose(cs)
      }
    }

    socket.onerror = (err: any): void => {
      // this.logger.error('Error' + err)
    }

    socket.onmessage = (msg: WebSocket.MessageEvent): void => {
      if (cs) {
        const res = this.onMessage(cs, msg.data)
        socket.send(res)
      }
    }
  }

  private onClose(cs: ChargingStation): void {
    cs.disconnect()
  }

  private onError(): void {
    // this.logger.error('Error' + err)
  }

  private onMessage(cs: ChargingStation, data: any): string {
    // Brauche im Fehlerfall
    let requestMessage: OcppRequestMessageDto | undefined

    try {
      cs.logger.debug(`Received`, data)
      // Das "Array" validieren
      requestMessage = arrayToRequestMessage(data)
      // Kombi aus Action und Payload validieren
      MessageValidator.instance.validateRequestPayload(requestMessage)

      // Verarbeitung der Daten
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
      cs.logger.debug('Send', response)
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
        logger.fatal('Internal Server Error', err)
        const errorResponseMessage = new OcppErrorResponseMessageDto(messageId, OcppErrorCodeEnum.InternalError)
        return errorResponseMessage.toString()
      }
    }
  }
}
