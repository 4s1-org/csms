import { IsNotEmpty, IsInt, IsPositive, IsString, MaxLength, ValidateNested } from "class-validator"
import { ResponseBaseDto } from "../generated/response-base.dto"
import { OcppBaseDto } from "./ocpp-base.dto"
import { OcppMessageTypeIdEnum } from "./ocpp-message-type-id.enum"

export class OcppCallResultDto extends OcppBaseDto {
  constructor(
    messageId: string,
    payload: ResponseBaseDto,
  ) {
    super()
    this.messageTypeId = OcppMessageTypeIdEnum.Result
    this.messageId = messageId
    this.payload = payload
  }

  // ToDo: Fixer Wert setzen
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  /** This is a Message Type Number which is used to identify the type of the message. */
  public messageTypeId: OcppMessageTypeIdEnum.Result

  @IsNotEmpty()
  @IsString()
  @MaxLength(36)
  /** This must be the exact same ID that is in the call request so that the recipient can match request and result. */
  public messageId: string

  @IsNotEmpty()
  /** JSON Payload of the action. */
  public payload: ResponseBaseDto

  public toString(): string {
    return JSON.stringify([this.messageTypeId, this.messageId, this.payload])
  }
}
