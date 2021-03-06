import { v4 as uuid } from 'uuid'
import { Logger } from '@yellowgarbagebag/common-lib'
import { IReceiveMessage } from './i-receive-message'
import { PendingPromises } from './pending-promises'
import { ISendMessage } from './i-send-message'
import { OcppRequestMessageDto } from '../ocpp-messages/ocpp-request-message.dto'
import { OcppMessageHandler } from '../ocpp-messages/ocpp-message-handler'
import { PayloadValidator } from '../ocpp-messages/payload-validator'
import { PayloadConverter } from '../ocpp-messages/payload-converter'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { OcppResponseMessageDto } from '../ocpp-messages/ocpp-response-message.dto'
import { OcppErrorMessageDto } from '../ocpp-messages/ocpp-error-message.dto'
import { RequestToResponseType } from '../generated/request-to-response.type'
import { RequestBaseDto } from '../generated/request-base.dto'
import { actionDtoMapping } from '../generated/action-dto-mapping'

export abstract class WsClientBase implements ISendMessage {
  private requestList: PendingPromises[] = []
  public readonly logger = new Logger(this.uniqueIdentifier)

  constructor(protected readonly uniqueIdentifier: string) {
    // nothing to do
  }

  public abstract disconnect(): void

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

  protected abstract sendInternal(msg: string): boolean
}
