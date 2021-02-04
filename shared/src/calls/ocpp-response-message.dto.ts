import { ResponseBaseDto } from '../generated/response-base.dto'
import { OcppBaseCallDto } from './ocpp-base-message.dto'
import { OcppMessageTypeIdEnum } from './ocpp-message-type-id.enum'

export class OcppResponseCallDto extends OcppBaseCallDto {
  constructor(messageId: string, payload: ResponseBaseDto) {
    super(OcppMessageTypeIdEnum.Result, messageId)
    this.payload = payload
  }

  /** JSON Payload of the action. */
  public payload: ResponseBaseDto

  public toCallString(): string {
    return JSON.stringify([this.messageTypeId, this.messageId, this.payload])
  }
}
