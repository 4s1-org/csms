import { ResponseBaseDto } from '../generated/response-base.dto'
import { OcppBaseMessageDto } from './ocpp-base-message.dto'
import { OcppMessageTypeIdEnum } from './ocpp-message-type-id.enum'

export class OcppResponseMessageDto extends OcppBaseMessageDto {
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
