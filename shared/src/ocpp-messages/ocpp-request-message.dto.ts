import { OcppActionEnum } from '../generated/ocpp-action.enum'
import { RequestBaseDto } from '../generated/request-base.dto'
import { OcppBaseMessageDto } from './ocpp-base-message.dto'
import { OcppMessageTypeIdEnum } from './ocpp-message-type-id.enum'

export class OcppRequestMessageDto extends OcppBaseMessageDto {
  constructor(messageId: string, action: OcppActionEnum, payload: RequestBaseDto) {
    super(OcppMessageTypeIdEnum.Call, messageId)
    this.action = action
    this.payload = payload
  }

  /** The name of the remote procedure or action. This field SHALL contain a case-sensitive string.
   * The field SHALL contain the OCPP Message name without the "Request" suffix. For example: For
   * a "BootNotificationRequest", this field shall be set to "BootNotification".
   */
  public action: OcppActionEnum

  /** JSON Payload of the action. */
  public payload: RequestBaseDto

  public toMessageString(): string {
    return JSON.stringify([this.messageTypeId, this.messageId, this.action, this.payload])
  }
}
