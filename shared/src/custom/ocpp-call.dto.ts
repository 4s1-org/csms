import { ApiProperty } from "@nestjs/swagger"
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, ValidateNested } from "class-validator"
import { OcppMessageEnum } from "../ocpp-message.enum"
import { OcppMessageTypeIdEnum } from "./ocpp-message-type-id.enum"
import { JSONObject } from "./types"

export class OcppCallDto {
  constructor(
    messageTypeId: OcppMessageTypeIdEnum.Call,
    messageId: string,
    action: OcppMessageEnum,
    payload: JSONObject | any,
  ) {
    this.messageTypeId = messageTypeId
    this.messageId = messageId
    this.action = action
    this.payload = payload
  }

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  public messageTypeId: OcppMessageTypeIdEnum.Call

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public messageId: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(OcppMessageEnum)
  public action: OcppMessageEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public payload: any

  public toMessage(): [number, string, string, any] {
    return [this.messageTypeId, this.messageId, this.action, this.payload]
  }
}
