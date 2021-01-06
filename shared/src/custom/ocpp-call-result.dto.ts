import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsInt, IsPositive, IsString, MaxLength, ValidateNested } from "class-validator"
import { IResponseMessage } from "src/i-response-message"
import { OcppMessageTypeIdEnum } from "./ocpp-message-type-id.enum"

export type OccpCallResultType = [number, string, IResponseMessage]

export class OcppCallResultDto {
  constructor(
    messageId: string,
    payload: IResponseMessage,
  ) {
    this.messageTypeId = OcppMessageTypeIdEnum.Result
    this.messageId = messageId
    this.payload = payload
  }

  // ToDo: Fixer Wert setzen
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  /** This is a Message Type Number which is used to identify the type of the message. */
  public messageTypeId: OcppMessageTypeIdEnum.Result

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(36)
  /** This must be the exact same ID that is in the call request so that the recipient can match request and result. */
  public messageId: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  /** JSON Payload of the action. */
  public payload: IResponseMessage

  public toMessage(): OccpCallResultType {
    return [this.messageTypeId, this.messageId, this.payload]
  }
}
