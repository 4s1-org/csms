import { RequestBaseDto } from '@yellowgarbagebag/ocpp-lib'
import { ObjectType } from './ws-client'

export interface IConnection {
  send: <T extends RequestBaseDto>(payload: T) => Promise<ObjectType<T>>
  disconnect: () => void
}
