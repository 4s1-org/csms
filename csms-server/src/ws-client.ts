import WebSocket from 'ws'
import { v4 as uuid } from 'uuid'
import {
  RequestBaseDto,
  RequestToResponseType,
  actionDtoMapping,
  OcppRequestMessageDto,
  OcppErrorMessageDto,
  OcppMessageHandler,
  OcppResponseMessageDto,
  PayloadConverter,
  PayloadValidator,
  ResponseBaseDto,
} from '@yellowgarbagebag/ocpp-lib'
import { ISendMessage } from './cs/i-send-message'
import { PendingPromises } from './cs/pending-promises'
import { Logger } from '@yellowgarbagebag/common-lib'
import { IReceiveMessage } from './cs/i-receive-message'

export class WsClient implements ISendMessage {
  private requestList: PendingPromises[] = []
  public readonly logger = new Logger(this.uniqueIdentifier)

  constructor(protected readonly uniqueIdentifier: string, private readonly socket: WebSocket) {
    // nothing to do
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.close()
    }
  }

  public onMessage(data: any, receiveMessage: IReceiveMessage): void {
    const msg = OcppMessageHandler.instance.validateAndConvert(data)

    if (msg instanceof OcppRequestMessageDto) {
      this.logger.info(`Incoming Request | ${msg.action} | ${msg.messageId}`)
      PayloadValidator.instance.validateRequestPayload(msg)
      PayloadConverter.instance.convertRequestPayload(msg)
      // Verarbeitung der Daten
      const responsePayload: ResponseBaseDto = receiveMessage.receive(msg.payload, msg.action)
      // Antwortobjekt erstellen
      const responseCall = new OcppResponseMessageDto(msg.messageId, responsePayload)
      // Anwortdaten validieren (nice to have)
      PayloadValidator.instance.validateResponsePayload(responseCall, msg.action)
      this.logger.info(`Outgoing Response | ${msg.action} | ${msg.messageId}`)
      this.sendInternal(responseCall.toMessageString())
      return
    } else if (msg instanceof OcppResponseMessageDto) {
      const pendingPromise = this.requestList[0]
      if (pendingPromise) {
        if (pendingPromise.msg.messageId === msg.messageId) {
          const idx = this.requestList.indexOf(pendingPromise)
          this.requestList.splice(idx, 1)
          this.logger.info(`Incoming Response | ${pendingPromise.msg.action} | ${msg.messageId}`)
          PayloadValidator.instance.validateResponsePayload(msg, pendingPromise.msg.action)
          PayloadConverter.instance.convertResponsePayload(msg, pendingPromise.msg.action)
          pendingPromise.resolve(msg.payload)
          return
        }
        pendingPromise.reject()
      }
    } else if (msg instanceof OcppErrorMessageDto) {
      // ToDo
      return
    }
    throw new Error('Invalid pending promise state')
  }

  public send<T extends RequestBaseDto>(payload: T): Promise<RequestToResponseType<T>> {
    return new Promise((resolve, reject) => {
      const mapping = actionDtoMapping.find((x) => payload instanceof x.requestDto)
      if (!mapping) {
        throw new Error('No action mapping found' + payload)
      }

      const msg = new OcppRequestMessageDto(uuid(), mapping.action, payload)
      this.logger.info(`Outgoing Request | ${msg.action} | ${msg.messageId}`)
      this.requestList.push(new PendingPromises(msg, resolve, reject))
      if (!this.sendInternal(msg.toMessageString())) {
        reject('Socket not open')
      }
    })
  }

  protected sendInternal(msg: string): boolean {
    if (this.socket && this.socket.OPEN) {
      this.socket.send(msg)
      return true
    }
    return false
  }
}
