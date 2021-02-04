import { OcppBaseCallDto } from '../calls/ocpp-base-message.dto'
import { OcppErrorCallDto } from '../calls/ocpp-error-message.dto'
import { OcppErrorCodeEnum } from '../calls/ocpp-error-code.enum'
import { OcppRequestCallDto } from '../calls/ocpp-request-message.dto'
import { OcppResponseCallDto } from '../calls/ocpp-response-message.dto'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CallConverter } from './converter/ocpp-message-converter'
import { PayloadConverter } from './converter/payload-converter'
import { PayloadValidator } from './converter/payload-validator'
import { CsmsCallValidationError } from './errors/csms-call-validation-error'
import { CsmsError } from './errors/csms-error'
import { IChargingStation } from './i-charging-station'

export function handleIncomingCall(cs: IChargingStation, data: unknown): OcppBaseCallDto | undefined {
  // Brauche im Fehlerfall
  let call: OcppBaseCallDto | undefined

  try {
    cs.logger.debug('Received', data)
    // Das "Array" validieren
    call = CallConverter.instance.convert(data)

    if (call instanceof OcppRequestCallDto) {
      cs.logger.info(`Incoming Request | ${call.action} | ${call.messageId}`)
      PayloadValidator.instance.validateRequest(call)
      PayloadConverter.instance.convertRequest(call)
      // Verarbeitung der Daten
      const responsePayload: ResponseBaseDto = cs.incomingRequestCall(call.payload)
      // Antwortobjekt erstellen
      const responseCall = new OcppResponseCallDto(call.messageId, responsePayload)
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
    } else if (call instanceof OcppResponseCallDto) {
      const action = cs.getActionToRequest(call.messageId)
      cs.logger.info(`Incoming Response | ${action} | ${call.messageId}`)
      PayloadValidator.instance.validateResponse(call, action)
      PayloadConverter.instance.convertResponse(call, action)
      cs.incomingResponseCall(call.payload)
      // Auf eine Antwort wird keine Antwort gesendet
      return undefined
    } else if (call instanceof OcppErrorCallDto) {
      const action = cs.getActionToRequest(call.messageId)
      cs.logger.info(`Incoming Error | ${action} | ${call.messageId}`)
      cs.incomingErrorCall(call)
      // Auf einen Fehler wird keine Antwort gesendet
      return undefined
    } else {
      // Das kann eigentlich nie passieren
      throw new CsmsError(OcppErrorCodeEnum.InternalError, 'Unknown call')
    }
  } catch (err) {
    let errorCall: OcppErrorCallDto

    if (err instanceof CsmsCallValidationError) {
      cs.logger.warn(`Validation Error | ${err.errorCode} | ${err.errorDescription}`)
      errorCall = new OcppErrorCallDto(err.messageId, err.errorCode, err.errorDescription)
    } else if (err instanceof CsmsError) {
      const messageId: string = call?.messageId || ''
      cs.logger.warn(`Csms Error | ${err.errorCode} | ${err.errorDescription}`)
      errorCall = new OcppErrorCallDto(messageId, err.errorCode, err.errorDescription)
    } else {
      const messageId: string = call?.messageId || ''
      cs.logger.fatal('Internal Server Error')
      cs.logger.fatal(err)
      errorCall = new OcppErrorCallDto(messageId, OcppErrorCodeEnum.InternalError)
    }
    // Niemals auf einen Fehler mit einem neuen Fehler Antworten um PingPong zu vermeiden
    if (call instanceof OcppErrorCallDto) {
      return undefined
    }
    return errorCall
  }
}
