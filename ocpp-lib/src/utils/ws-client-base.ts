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
import { HeartbeatRequestDto, HeartbeatResponseDto } from '../messages'
import { OcppActionEnum } from '../generated/ocpp-action.enum'

/**
 * Baseclass for a websocket client.
 */
export abstract class WsClientBase implements ISendMessage {
  private requestList: PendingPromises[] = []

  public constructor(protected readonly uniqueIdentifier: string, protected readonly logger: Logger) {
    // nothing to do
  }

  /**
   * Disconnect the client.
   */
  public abstract disconnect(): void

  /**
   * A message was received.
   */
  public onMessage(data: any, receiveMessage: IReceiveMessage): void {
    // Für den Fehlerfall
    let msg: OcppRpcBaseDto | undefined

    try {
      this.logger.trace(`Incoming data`)
      this.logger.trace(`${data}`)

      // Typ der eingehenden Daten bestimmen.
      try {
        msg = OcppRpcHandler.instance.validateAndConvert(data)
      } catch (err) {
        if (err instanceof OcppRpcValidationError) {
          this.logger.warn(`OcppRpcValidationError in received data`)
          this.sendError(new OcppCallerrorDto(err.messageId, err.errorCode, err.errorDescription))
          return
        }
        throw err
      }

      if (msg instanceof OcppCallDto) {
        this.handleCall(msg, receiveMessage)
      } else if (msg instanceof OcppCallresultDto) {
        this.handleCallresult(msg)
      } else if (msg instanceof OcppCallerrorDto) {
        this.handleCallerror(msg)
      } else {
        throw new Error('Invalid RPC message type')
      }
    } catch (err) {
      this.logger.fatal('Internal Server Error')
      this.logger.fatal(err)

      // Niemals auf einen Fehler mit einem neuen Fehler Antworten um PingPong zu vermeiden
      if (msg instanceof OcppCallerrorDto) {
        return
      }

      const messageId: string = msg?.messageId || ''
      const errMsg = new OcppCallerrorDto(messageId, OcppErrorCodeEnum.InternalError)
      this.sendInternal(errMsg.toMessageString())
    }
  }

  /**
   * A message should be send
   */
  public send<T extends RequestBaseDto>(payload: T): Promise<RequestToResponseType<T>> {
    // Falls ein Request bereits läuft, darf kein weitere Request gestellt werden.
    // Damit aber der Heartbeat als Schleife laufen kann, wir für ihn einen Sonderbehandlung umgesetzt.
    if (this.requestList.length > 0 && payload instanceof HeartbeatRequestDto) {
      this.logger.info(`Fake Heartbeat response due to pending request`)
      this.logger.info(this.requestList[0].msg.toMessageString())
      return new Promise((resolve, reject) => {
        const msg = new OcppCallDto(uuid(), OcppActionEnum.Heartbeat, payload)
        const foo = new PendingPromises(msg, resolve, reject)
        foo.resolve(new HeartbeatResponseDto(new Date().toISOString()))
      })
    }

    return new Promise((resolve, reject) => {
      const mapping = actionDtoMapping.find((x) => payload instanceof x.requestDto)
      if (!mapping) {
        throw new Error('No action mapping found' + payload)
      }

      const msg = new OcppCallDto(uuid(), mapping.action, payload)
      const msgStr = msg.toMessageString()
      this.logger.info(`Outgoing Call | ${msg.action} | ${msg.messageId}`)
      this.logger.debug(msgStr)
      this.requestList.push(new PendingPromises(msg, resolve, reject))
      if (!this.sendInternal(msgStr)) {
        reject('Socket not open')
      }
    })
  }

  /**
   * Internal implementation to send a message.
   */
  protected abstract sendInternal(msg: string): boolean

  /**
   * Behandelt eine eingehende Anfrage.
   */
  private handleCall(msg: OcppCallDto, receiveMessage: IReceiveMessage): void {
    this.logger.info(`Incoming Call | ${msg.action} | ${msg.messageId}`)
    this.logger.debug(msg.toMessageString())
    // Payload validieren und konvertieren
    try {
      PayloadValidator.instance.validateRequestPayload(msg)
      PayloadConverter.instance.convertRequestPayload(msg)
    } catch (err) {
      if (err instanceof CsmsError) {
        this.logger.warn(`Payload is invalid`)
        this.sendError(new OcppCallerrorDto(msg.messageId, err.errorCode, err.errorDescription))
        return
      }
      throw err
    }

    // Verarbeitung der Daten
    let responsePayload: ResponseBaseDto
    try {
      responsePayload = receiveMessage.receive(msg.payload)
    } catch (err) {
      if (err instanceof CsmsError) {
        this.logger.warn(`Receive function doesn't like the message`)
        this.sendError(new OcppCallerrorDto(msg.messageId, err.errorCode, err.errorDescription))
        return
      }
      throw err
    }

    // Antwortobjekt erstellen
    const responseCall = new OcppCallresultDto(msg.messageId, responsePayload)

    // Anwortdaten validieren (nice to have)
    try {
      PayloadValidator.instance.validateResponsePayload(responseCall, msg.action)
    } catch (err) {
      // Hier soll es auch bei einem Fehler weiter gehen.
      if (err instanceof CsmsError) {
        this.logger.warn(`Server send an invalid payload back | ${err.errorCode} | ${err.errorDescription}`)
      }
    }

    const resMsg = responseCall.toMessageString()
    this.logger.info(`Outgoing Callresult | ${msg.action} | ${msg.messageId}`)
    this.logger.debug(resMsg)
    this.sendInternal(resMsg)
  }

  /**
   * Behandelt eine eingehende Anwort auf eine Anfrage.
   */
  private handleCallresult(msg: OcppCallresultDto): void {
    const pendingPromise = this.requestList[0]
    if (pendingPromise) {
      if (pendingPromise.msg.messageId !== msg.messageId) {
        pendingPromise.reject()
        return
      }
      const idx = this.requestList.indexOf(pendingPromise)
      this.requestList.splice(idx, 1)
      this.logger.info(`Incoming Callresult | ${pendingPromise.msg.action} | ${msg.messageId}`)
      this.logger.debug(msg.toMessageString())
      try {
        PayloadValidator.instance.validateResponsePayload(msg, pendingPromise.msg.action)
        PayloadConverter.instance.convertResponsePayload(msg, pendingPromise.msg.action)
        pendingPromise.resolve(msg.payload)
      } catch (err) {
        if (err instanceof CsmsError) {
          this.logger.warn(`Payload is invalid`)
          this.sendError(new OcppCallerrorDto(msg.messageId, err.errorCode, err.errorDescription))
        }
        pendingPromise.resolve(null)
        throw err
      }
    }
  }

  private handleCallerror(msg: OcppCallerrorDto): void {
    const pendingPromise = this.requestList[0]
    if (pendingPromise) {
      if (pendingPromise.msg.messageId === msg.messageId) {
        this.logger.warn(
          `Incoming Callerror | ${pendingPromise.msg.action} | ${msg.messageId} | ${msg.errorCode} | ${msg.errorDescription}`,
        )
        this.logger.debug(msg.toMessageString())
        pendingPromise.reject(new Error(`${msg.errorCode} | ${msg.errorDescription || '---'}`))
      }
      pendingPromise.reject()
    }
  }

  private sendError(msg: OcppCallerrorDto): void {
    this.logger.info(`Outgoing Callerror | ${msg.messageId} | ${msg.errorCode} | ${msg.errorDescription}`)
    const msgStr = msg.toMessageString()
    this.logger.debug(msgStr)
    this.sendInternal(msgStr)
  }
}
