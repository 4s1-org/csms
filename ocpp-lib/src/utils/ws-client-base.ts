import { v4 as uuid } from 'uuid'
import { Logger } from '@yellowgarbagebag/common-lib'
import { IReceiveMessage } from './i-receive-message'
import { PendingPromise } from './pending-promises'
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
 * This class contains the main part of the incoming message handling.
 */
export abstract class WsClientBase implements ISendMessage {
  private requestList: PendingPromise[] = []

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

      // Validate and convert the incoming message to a ocpp call/callresult/callerror.
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

      // Start handling base on the type of the message.
      if (msg instanceof OcppCallDto) {
        // OCPP Call
        this.handleCall(msg, receiveMessage)
      } else if (msg instanceof OcppCallresultDto) {
        // OCPP Callresult
        this.handleCallresult(msg)
      } else if (msg instanceof OcppCallerrorDto) {
        // OCPP Callerror
        this.handleCallerror(msg)
      } else {
        // This case is practically impossible due to further validation.
        throw new Error('Invalid RPC message type')
      }
    } catch (err) {
      this.logger.fatal('Internal Server Error')
      this.logger.fatal(err)

      // Never reply to an error with an error due to prevent ping pong between CSMS <=> CS.
      if (msg instanceof OcppCallerrorDto) {
        return
      }

      // Sometimes a message id is available, but in case of an early error it isn't.
      const messageId: string = msg?.messageId || ''
      // Create error and send it back.
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
        const foo = new PendingPromise(msg, resolve, reject)
        foo.resolve(new HeartbeatResponseDto(new Date().toISOString()))
      })
    }

    // Fancy promise handling for the sender, so he could wait for a response.
    return new Promise((resolve, reject) => {
      // Find the action type base on type of the request.
      const mapping = actionDtoMapping.find((x) => payload instanceof x.requestDto)
      if (!mapping) {
        throw new Error('No action mapping found' + payload)
      }

      // Create OCPP call
      const msg = new OcppCallDto(uuid(), mapping.action, payload)
      const msgStr = msg.toMessageString()
      this.logger.info(`Outgoing Call | ${msg.action} | ${msg.messageId}`)
      this.logger.debug(msgStr)
      // Second part of fancy promise handling.
      // Add the unresolved promise to the list of requests, which waits for a response.
      this.requestList.push(new PendingPromise(msg, resolve, reject))
      if (!this.sendInternal(msgStr)) {
        reject('Socket not open')
      }
    })
  }

  /**
   * Internal implementation to send a message.
   * This must be implemented in the real WebSocket classes, due to different library (ws) or browser implementations.
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
    // Try to find the waiting request promise.
    const pendingPromise = this.tryToFindWaitingRequestPromise(msg.messageId)
    if (pendingPromise) {
      this.logger.info(`Incoming Callresult | ${pendingPromise.msg.action} | ${msg.messageId}`)
      this.logger.debug(msg.toMessageString())
      try {
        // Validate and convert payload
        PayloadValidator.instance.validateResponsePayload(msg, pendingPromise.msg.action)
        PayloadConverter.instance.convertResponsePayload(msg, pendingPromise.msg.action)
        // Resolve the waiting request with the corresponding response
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

  /**
   * Behandelt eine eingehende Fehlermeldung auf eine Anfrage.
   */
  private handleCallerror(msg: OcppCallerrorDto): void {
    // Try to find the waiting request promise.
    const pendingPromise = this.tryToFindWaitingRequestPromise(msg.messageId)
    if (pendingPromise) {
      this.logger.warn(`Incoming Callerror | ${pendingPromise.msg.action} | ${msg.messageId} | ${msg.errorCode} | ${msg.errorDescription}`)
      this.logger.debug(msg.toMessageString())
      // Resolve the waiting request with the error.
      pendingPromise.reject(new Error(`${msg.errorCode} | ${msg.errorDescription || '---'}`))
    }
  }

  /**
   * Try to find a waiting request message promise.
   * This function compares the messageId and reject the promise in case of mismatch.
   */
  private tryToFindWaitingRequestPromise(messageId: string): PendingPromise | undefined {
    // Try to find the waiting request promise.
    // The should be only one promise in queue.
    const pendingPromise = this.requestList[0]
    if (pendingPromise) {
      if (pendingPromise.msg.messageId !== messageId) {
        pendingPromise.reject()
        return
      }
      // Remove the waiting request from the waiting list.
      const idx = this.requestList.indexOf(pendingPromise)
      this.requestList.splice(idx, 1)
      return pendingPromise
    }
    return
  }

  /**
   * Sends a OCPP callerror back.
   */
  private sendError(msg: OcppCallerrorDto): void {
    this.logger.info(`Outgoing Callerror | ${msg.messageId} | ${msg.errorCode} | ${msg.errorDescription}`)
    const msgStr = msg.toMessageString()
    this.logger.debug(msgStr)
    this.sendInternal(msgStr)
  }
}
