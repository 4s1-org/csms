import { RequestBaseDto } from '../generated/request-base.dto'
import { RequestToResponseType } from '../generated/request-to-response.type'

/**
 * Interface for the send-function.
 */
export interface ISendMessage {
  send: <T extends RequestBaseDto>(payload: T) => Promise<RequestToResponseType<T>>
}
