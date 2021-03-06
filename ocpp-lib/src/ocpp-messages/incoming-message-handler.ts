import { OcppBaseMessageDto } from '../ocpp-messages/ocpp-base-message.dto'
import { OcppErrorMessageDto } from '../ocpp-messages/ocpp-error-message.dto'
import { OcppErrorCodeEnum } from '../ocpp-messages/ocpp-error-code.enum'
import { OcppRequestMessageDto } from '../ocpp-messages/ocpp-request-message.dto'
import { OcppResponseMessageDto } from '../ocpp-messages/ocpp-response-message.dto'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { OcppMessageHandler } from './ocpp-message-handler'
import { PayloadConverter } from './payload-converter'
import { PayloadValidator } from './payload-validator'
import { OcppMessageValidationError } from './ocpp-message-validation-error'
import { CsmsError } from '../utils/csms-error'
import { IChargingStation } from './i-charging-station'

/**
 * @deprecated
 */
export function handleIncomingMessage(cs: IChargingStation, data: unknown): OcppBaseMessageDto | undefined {
  // Brauche im Fehlerfall
  let msg: OcppBaseMessageDto | undefined

  try {
    cs.logger.debug('Received', data)
    // Das "Array" validieren
    msg = OcppMessageHandler.instance.validateAndConvert(data)

    if (msg instanceof OcppRequestMessageDto) {
      cs.logger.info(`Incoming Request | ${msg.action} | ${msg.messageId}`)
      PayloadValidator.instance.validateRequestPayload(msg)
      PayloadConverter.instance.convertRequestPayload(msg)
      // Verarbeitung der Daten
      const responsePayload: ResponseBaseDto = cs.incomingRequestMessage(msg)
      // Antwortobjekt erstellen
      const responseCall = new OcppResponseMessageDto(msg.messageId, responsePayload)
      // Anwortdaten validieren (nice to have)
      try {
        PayloadValidator.instance.validateResponsePayload(responseCall, msg.action)
      } catch (err) {
        if (err instanceof CsmsError) {
          cs.logger.error(`Server send invalid data | ${err.errorCode} | ${err.errorDescription}`)
        } else {
          throw err
        }
      }
      // Loggen und senden
      cs.logger.info(`Outgoing Response | ${msg.action} | ${msg.messageId}`)
      cs.logger.debug('Send', responseCall)
      return responseCall
    } else if (msg instanceof OcppResponseMessageDto) {
      const action = cs.getActionToRequest(msg.messageId)
      cs.logger.info(`Incoming Response | ${action} | ${msg.messageId}`)
      PayloadValidator.instance.validateResponsePayload(msg, action)
      PayloadConverter.instance.convertResponsePayload(msg, action)
      cs.incomingResponseMessage(msg)
      // Auf eine Antwort wird keine Antwort gesendet
      return undefined
    } else if (msg instanceof OcppErrorMessageDto) {
      const action = cs.getActionToRequest(msg.messageId)
      cs.logger.info(`Incoming Error | ${action} | ${msg.messageId}`)
      cs.incomingErrorMessage(msg)
      // Auf einen Fehler wird keine Antwort gesendet
      return undefined
    } else {
      // Das kann eigentlich nie passieren
      throw new CsmsError(OcppErrorCodeEnum.InternalError, 'Unknown call')
    }
  } catch (err) {
    let errMsg: OcppErrorMessageDto

    if (err instanceof OcppMessageValidationError) {
      cs.logger.warn(`Validation Error | ${err.errorCode} | ${err.errorDescription}`)
      errMsg = new OcppErrorMessageDto(err.messageId, err.errorCode, err.errorDescription)
    } else if (err instanceof CsmsError) {
      const messageId: string = msg?.messageId || ''
      cs.logger.warn(`CSMS Error | ${err.errorCode} | ${err.errorDescription}`)
      errMsg = new OcppErrorMessageDto(messageId, err.errorCode, err.errorDescription)
    } else {
      const messageId: string = msg?.messageId || ''
      cs.logger.fatal('Internal Server Error')
      cs.logger.fatal(err)
      errMsg = new OcppErrorMessageDto(messageId, OcppErrorCodeEnum.InternalError)
    }
    // Niemals auf einen Fehler mit einem neuen Fehler Antworten um PingPong zu vermeiden
    if (msg instanceof OcppErrorMessageDto) {
      return undefined
    }
    return errMsg
  }
}
