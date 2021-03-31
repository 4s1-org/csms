import { classToPlain } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { OcppRpcBaseDto } from './ocpp-rpc-base.dto'
import { OcppMessageTypeIdEnum } from './ocpp-message-type-id.enum'

export class OcppCallresultDto extends OcppRpcBaseDto {
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
