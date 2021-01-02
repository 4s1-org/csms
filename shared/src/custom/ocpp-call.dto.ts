import { ApiProperty } from "@nestjs/swagger"
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, MaxLength, ValidateNested } from "class-validator"
import { OcppMessageEnum } from "../ocpp-message.enum"
import { OcppMessageTypeIdEnum } from "./ocpp-message-type-id.enum"

export class OcppCallDto {
  constructor(
    messageId: string,
    action: OcppMessageEnum,
    payload: unknown,
  ) {
    this.messageTypeId = OcppMessageTypeIdEnum.Call
    this.messageId = messageId
    this.action = action
    this.payload = payload
  }

  // ToDo: Fixer Wert setzen
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  /** This is a Message Type Number which is used to identify the type of the message. */
  public messageTypeId: OcppMessageTypeIdEnum.Call

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(36)
  /** This is a unique identifier that will be used to match request and result */
  public messageId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(OcppMessageEnum)
  /** The name of the remote procedure or action. This field SHALL contain a case-sensitive string.
    * The field SHALL contain the OCPP Message name without the "Request" suffix. For example: For
    * a "BootNotificationRequest", this field shall be set to "BootNotification".
    */
  public action: OcppMessageEnum

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  /** JSON Payload of the action. */
  public payload: unknown

  public toMessage(): [number, string, string, unknown] {
    return [this.messageTypeId, this.messageId, this.action, this.payload]
  }
}
