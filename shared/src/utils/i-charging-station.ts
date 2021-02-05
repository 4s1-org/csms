import { OcppErrorMessageDto } from '../calls/ocpp-error-message.dto'
import { OcppRequestMessageDto } from '../calls/ocpp-request-message.dto'
import { OcppActionEnum } from '../generated/ocpp-action.enum'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { Logger } from './logger'

export interface IChargingStation {
  logger: Logger

  incomingRequestCall(payload: RequestBaseDto): ResponseBaseDto
  incomingResponseCall(payload: ResponseBaseDto): void
  incomingErrorCall(payload: OcppErrorMessageDto): void

  getActionToRequest(messageId: string): OcppActionEnum

  addToSendList(requestCall: OcppRequestMessageDto): void
}
