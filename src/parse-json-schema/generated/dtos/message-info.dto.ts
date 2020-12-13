// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsString, IsEnum, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ComponentDto } from './component.dto'
import { MessagePriorityEnum } from '../enums/message-priority.enum'
import { MessageStateEnum } from '../enums/message-state.enum'
import { MessageContentDto } from './message-content.dto'

/**
 * Message_ Info
urn:x-enexis:ecdm:uid:2:233264
Contains message details, for a message to be displayed on a Charging Station.
 */
export class MessageInfoDto {
  public constructor () {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  public display!: ComponentDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public id!: number

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(MessagePriorityEnum)
  public priority!: MessagePriorityEnum

  @ApiProperty()
  @IsOptional()
  @IsEnum(MessageStateEnum)
  public state!: MessageStateEnum

  /**
   * Message_ Info. Start. Date_ Time
urn:x-enexis:ecdm:uid:1:569256
From what date-time should this message be shown. If omitted: directly.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  public startDateTime!: string

  /**
   * Message_ Info. End. Date_ Time
urn:x-enexis:ecdm:uid:1:569257
Until what date-time should this message be shown, after this date/time this message SHALL be removed.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  public endDateTime!: string

  /**
   * During which transaction shall this message be shown.
Message SHALL be removed by the Charging Station after transaction has
ended.
   */
  @ApiProperty()
  @IsOptional()
  @Length(0, 36)
  @IsString()
  public transactionId!: string

  @ApiProperty()
  @IsNotEmpty()
  public message!: MessageContentDto
}
