import { RequestBaseDto, RequestToResponseType } from '@yellowgarbagebag/ocpp-lib'

export interface ISendMessage {
  send: <T extends RequestBaseDto>(payload: T) => Promise<RequestToResponseType<T>>
}
