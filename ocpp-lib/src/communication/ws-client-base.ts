import { v4 as uuid } from 'uuid'
import { Logger } from '@yellowgarbagebag/common-lib'
import { IReceiveMessage } from './i-receive-message'
import { PendingPromises } from './pending-promises'
import { ISendMessage } from './i-send-message'
import { OcppCallDto } from '../ocpp-rpc/ocpp-call.dto'
import { OcppRpcHandler } from '../ocpp-rpc/ocpp-rpc-handler'
import { PayloadValidator } from '../ocpp-rpc/payload-validator'
import { PayloadConverter } from '../ocpp-rpc/payload-converter'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { OcppCallresultDto } from '../ocpp-rpc/ocpp-callresult.dto'
import { OcppCallerrorDto } from '../ocpp-rpc/ocpp-callerror.dto'
import { RequestToResponseType } from '../generated/request-to-response.type'
import { RequestBaseDto } from '../generated/request-base.dto'
import { actionDtoMapping } from '../generated/action-dto-mapping'
import { OcppRpcValidationError } from '../ocpp-rpc/ocpp-rpc-validation-error'
import { CsmsError } from '../utils/csms-error'
import { OcppErrorCodeEnum } from '../ocpp-rpc/ocpp-error-code.enum'
import { OcppRpcBaseDto } from '../ocpp-rpc/ocpp-rpc-base.dto'

export abstract class WsClientBase implements ISendMessage {
  private requestList: PendingPromises[] = []
  public readonly logger = new Logger(this.uniqueIdentifier)

  constructor(protected readonly uniqueIdentifier: string) {
    // nothing to do
  }

  public abstract disconnect(): void

  public onMessage(data: any, receiveMessage: IReceiveMessage): void {
    // Für den Fehlerfall
    let msg: OcppRpcBaseDto | undefined

    try {
      this.logger.debug('Incoming data', data)
      msg = OcppRpcHandler.instance.validateAndConvert(data)

      if (msg instanceof OcppCallDto) {
        this.logger.info(`Incoming Request | ${msg.action} | ${msg.messageId}`)
        PayloadValidator.instance.validateRequestPayload(msg)
        PayloadConverter.instance.convertRequestPayload(msg)
        // Verarbeitung der Daten
        const responsePayload: ResponseBaseDto = receiveMessage.receive(msg.payload, msg.action)
        // Antwortobjekt erstellen
        const responseCall = new OcppCallresultDto(msg.messageId, responsePayload)
        // Anwortdaten validieren (nice to have)
        PayloadValidator.instance.validateResponsePayload(responseCall, msg.action)
        this.logger.info(`Outgoing Response | ${msg.action} | ${msg.messageId}`)
        this.sendInternal(responseCall.toMessageString())
        return
      } else if (msg instanceof OcppCallresultDto) {
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
      } else if (msg instanceof OcppCallerrorDto) {
        // ToDo
        return
      }
      throw new Error('Invalid pending promise state')
    } catch (err) {
      let errMsg: OcppCallerrorDto

      if (err instanceof OcppRpcValidationError) {
        this.logger.warn(`Validation Error | ${err.errorCode} | ${err.errorDescription}`)
        errMsg = new OcppCallerrorDto(err.messageId, err.errorCode, err.errorDescription)
      } else if (err instanceof CsmsError) {
        const messageId: string = msg?.messageId || ''
        this.logger.warn(`CSMS Error | ${err.errorCode} | ${err.errorDescription}`)
        errMsg = new OcppCallerrorDto(messageId, err.errorCode, err.errorDescription)
      } else {
        const messageId: string = msg?.messageId || ''
        this.logger.fatal('Internal Server Error')
        this.logger.fatal(err)
        errMsg = new OcppCallerrorDto(messageId, OcppErrorCodeEnum.InternalError)
      }
      // Niemals auf einen Fehler mit einem neuen Fehler Antworten um PingPong zu vermeiden
      if (msg instanceof OcppCallerrorDto) {
        return undefined
      }
      this.sendInternal(errMsg.toMessageString())
    }
  }

  public send<T extends RequestBaseDto>(payload: T): Promise<RequestToResponseType<T>> {
    return new Promise((resolve, reject) => {
      const mapping = actionDtoMapping.find((x) => payload instanceof x.requestDto)
      if (!mapping) {
        throw new Error('No action mapping found' + payload)
      }

      const msg = new OcppCallDto(uuid(), mapping.action, payload)
      this.logger.info(`Outgoing Request | ${msg.action} | ${msg.messageId}`)
      this.requestList.push(new PendingPromises(msg, resolve, reject))
      if (!this.sendInternal(msg.toMessageString())) {
        reject('Socket not open')
      }
    })
  }

  protected abstract sendInternal(msg: string): boolean
}
