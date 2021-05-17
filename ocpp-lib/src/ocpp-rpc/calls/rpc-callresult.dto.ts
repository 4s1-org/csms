import { classToPlain } from 'class-transformer'
import { ResponseBaseDto } from '../../generated/response-base.dto'
import { RpcBaseDto } from './rpc-base.dto'
import { OcppMessageTypeIdEnum } from '../rpc-message-type-id.enum'

export class RpcCallresultDto extends RpcBaseDto {
  constructor(messageId: string, payload: ResponseBaseDto) {
    super(OcppMessageTypeIdEnum.Result, messageId)
    this.payload = payload
  }

  /** JSON Payload of the action. */
  public payload: ResponseBaseDto

  public toMessageString(): string {
    return JSON.stringify([this.messageTypeId, this.messageId, classToPlain(this.payload)])
  }
}
