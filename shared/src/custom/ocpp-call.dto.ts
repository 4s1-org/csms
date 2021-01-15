import { IsEnum, IsInt, IsNotEmpty, IsPositive, IsString, MaxLength } from "class-validator"
import { OcppMessageEnum } from "../generated/ocpp-message.enum"
import { RequestBaseDto } from "../generated/request-base.dto"
import { OcppBaseDto } from "./ocpp-base.dto"
import { OcppMessageTypeIdEnum } from "./ocpp-message-type-id.enum"

export class OcppCallDto extends OcppBaseDto {
  constructor(
    messageId: string,
    action: OcppMessageEnum,
    payload: RequestBaseDto,
  ) {
    super()
    this.messageTypeId = OcppMessageTypeIdEnum.Call
    this.messageId = messageId
    this.action = action
    this.payload = payload
  }

  // ToDo: Fixer Wert setzen
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  /** This is a Message Type Number which is used to identify the type of the message. */
  public messageTypeId: OcppMessageTypeIdEnum.Call

  @IsNotEmpty()
  @IsString()
  @MaxLength(36)
  /** This is a unique identifier that will be used to match request and result */
  public messageId: string

  @IsNotEmpty()
  @IsEnum(OcppMessageEnum)
  /** The name of the remote procedure or action. This field SHALL contain a case-sensitive string.
    * The field SHALL contain the OCPP Message name without the "Request" suffix. For example: For
    * a "BootNotificationRequest", this field shall be set to "BootNotification".
    */
  public action: OcppMessageEnum

  @IsNotEmpty()
  /** JSON Payload of the action. */
  public payload: RequestBaseDto

  public toString(): string {
    return JSON.stringify([this.messageTypeId, this.messageId, this.action, this.payload])
  }
}
