// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsBoolean, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { MessageInfoDto } from '../datatypes/message-info.dto'

export class NotifyDisplayMessagesRequestDto extends RequestBaseDto {
  public constructor(
    requestId: number,
  ) {
    super()
    this.requestId = requestId
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsOptional()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public messageInfo!: MessageInfoDto[]

  /**
   * The id of the <<getdisplaymessagesrequest,GetDisplayMessagesRequest>> that requested this message.
   */
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  /**
   * "to be continued" indicator. Indicates whether another part of the report follows in an upcoming NotifyDisplayMessagesRequest message. Default value when omitted is false.
   */
  @IsOptional()
  @IsBoolean()
  public tbc!: boolean
}
