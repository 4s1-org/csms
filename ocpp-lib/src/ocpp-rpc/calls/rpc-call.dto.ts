import { classToPlain } from 'class-transformer'
import { RpcActionEnum } from '../../generated/rpc-action.enum'
import { RequestBaseDto } from '../../generated/request-base.dto'
import { RpcBaseDto } from './rpc-base.dto'
import { OcppMessageTypeIdEnum } from '../rpc-message-type-id.enum'

export class RpcCallDto extends RpcBaseDto {
  constructor(messageId: string, action: RpcActionEnum, payload: RequestBaseDto) {
    super(OcppMessageTypeIdEnum.Call, messageId)
    this.action = action
    this.payload = payload
  }

  /** The name of the remote procedure or action. This field SHALL contain a case-sensitive string.
   * The field SHALL contain the OCPP Message name without the "Request" suffix. For example: For
   * a "BootNotificationRequest", this field shall be set to "BootNotification".
   */
  public action: RpcActionEnum

  /** JSON Payload of the action. */
  public payload: RequestBaseDto

  public toMessageString(): string {
    return JSON.stringify([this.messageTypeId, this.messageId, this.action, classToPlain(this.payload)])
  }
}
