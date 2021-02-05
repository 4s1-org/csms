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

export function handleIncomingMessage(cs: IChargingStation, data: unknown): OcppBaseMessageDto | undefined {
  // Brauche im Fehlerfall
  let call: OcppBaseMessageDto | undefined

  try {
    cs.logger.debug('Received', data)
    // Das "Array" validieren
    call = OcppMessageHandler.instance.validateAndConvert(data)

    if (call instanceof OcppRequestMessageDto) {
      cs.logger.info(`Incoming Request | ${call.action} | ${call.messageId}`)
      PayloadValidator.instance.validateRequest(call)
      PayloadConverter.instance.convertRequest(call)
      // Verarbeitung der Daten
      const responsePayload: ResponseBaseDto = cs.incomingRequestMessage(call.payload)
      // Antwortobjekt erstellen
      const responseCall = new OcppResponseMessageDto(call.messageId, responsePayload)
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
      return responseCall
    } else if (call instanceof OcppResponseMessageDto) {
      const action = cs.getActionToRequest(call.messageId)
      cs.logger.info(`Incoming Response | ${action} | ${call.messageId}`)
      PayloadValidator.instance.validateResponse(call, action)
      PayloadConverter.instance.convertResponse(call, action)
      cs.incomingResponseMessage(call.payload)
      // Auf eine Antwort wird keine Antwort gesendet
      return undefined
    } else if (call instanceof OcppErrorMessageDto) {
      const action = cs.getActionToRequest(call.messageId)
      cs.logger.info(`Incoming Error | ${action} | ${call.messageId}`)
      cs.incomingErrorMessage(call)
      // Auf einen Fehler wird keine Antwort gesendet
      return undefined
    } else {
      // Das kann eigentlich nie passieren
      throw new CsmsError(OcppErrorCodeEnum.InternalError, 'Unknown call')
    }
  } catch (err) {
    let errorCall: OcppErrorMessageDto

    if (err instanceof OcppMessageValidationError) {
      cs.logger.warn(`Validation Error | ${err.errorCode} | ${err.errorDescription}`)
      errorCall = new OcppErrorMessageDto(err.messageId, err.errorCode, err.errorDescription)
    } else if (err instanceof CsmsError) {
      const messageId: string = call?.messageId || ''
      cs.logger.warn(`Csms Error | ${err.errorCode} | ${err.errorDescription}`)
      errorCall = new OcppErrorMessageDto(messageId, err.errorCode, err.errorDescription)
    } else {
      const messageId: string = call?.messageId || ''
      cs.logger.fatal('Internal Server Error')
      cs.logger.fatal(err)
      errorCall = new OcppErrorMessageDto(messageId, OcppErrorCodeEnum.InternalError)
    }
    // Niemals auf einen Fehler mit einem neuen Fehler Antworten um PingPong zu vermeiden
    if (call instanceof OcppErrorMessageDto) {
      return undefined
    }
    return errorCall
  }
}
