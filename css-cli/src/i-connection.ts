import { RequestBaseDto, RequestToResponseType } from '@yellowgarbagebag/ocpp-lib'

export interface IConnection {
  send: <T extends RequestBaseDto>(payload: T) => Promise<RequestToResponseType<T>>
  disconnect: () => void
}
