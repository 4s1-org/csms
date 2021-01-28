import { OcppErrorCallDto } from '../calls/ocpp-error-call.dto'
import { OcppActionEnum } from '../generated/ocpp-action.enum'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { Logger } from './logger'

export interface IChargingStation {
  logger: Logger

  incomingRequestCall: (payload: RequestBaseDto) => ResponseBaseDto
  incomingResponseCall: (payload: ResponseBaseDto) => void
  incomingErrorCall: (payload: OcppErrorCallDto) => void

  getActionToRequest: (messageId: string) => OcppActionEnum
}
