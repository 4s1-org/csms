// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { MessageInfoDto } from './message-info.dto'

export class NotifyDisplayMessagesRequestDto {
  public constructor(
    requestId: number,
  ) {
    this.requestId = requestId
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @IsArray()
  public messageInfo!: MessageInfoDto[]

  /**
   * The id of the <<getdisplaymessagesrequest,GetDisplayMessagesRequest>> that requested this message.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  /**
   * "to be continued" indicator. Indicates whether another part of the report follows in an upcoming NotifyDisplayMessagesRequest message. Default value when omitted is false.
   */
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public tbc!: boolean
}
