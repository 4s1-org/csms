import { RequestBaseDto, ResponseBaseDto } from '@yellowgarbagebag/ocpp-lib'

export interface IReceiveMessage {
  receive: (payload: RequestBaseDto) => ResponseBaseDto
}
