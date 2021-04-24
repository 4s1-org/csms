import { OcppActionEnum } from '../generated/ocpp-action.enum'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ResponseBaseDto } from '../generated/response-base.dto'

/**
 * Interface for the receive-function.
 */
export interface IReceiveMessage {
  receive: (payload: RequestBaseDto, action: OcppActionEnum) => ResponseBaseDto
}
