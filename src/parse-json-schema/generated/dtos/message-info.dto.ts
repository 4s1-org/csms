// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { MessageContentDto } from './message-content.dto'
import { MessagePriorityEnum } from '../enums/message-priority.enum'
import { MessageStateEnum } from '../enums/message-state.enum'

/**
 * Message_ Info
 * urn:x-enexis:ecdm:uid:2:233264
 * Contains message details, for a message to be displayed on a Charging Station.
 */
export class MessageInfoDto {
  public constructor(
    id: number,
    priority: MessagePriorityEnum,
    message: MessageContentDto,
  ) {
    this.id = id
    this.priority = priority
    this.message = message
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  public display!: ComponentDto

  /**
   * Identified_ Object. MRID. Numeric_ Identifier
   * urn:x-enexis:ecdm:uid:1:569198
   * Master resource identifier, unique within an exchange context. It is defined within the OCPP context as a positive Integer value (greater or equal to zero).
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public id: number

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(MessagePriorityEnum)
  public priority: MessagePriorityEnum

  @ApiProperty()
  @IsOptional()
  @IsEnum(MessageStateEnum)
  public state!: MessageStateEnum

  /**
   * Message_ Info. Start. Date_ Time
   * urn:x-enexis:ecdm:uid:1:569256
   * From what date-time should this message be shown. If omitted: directly.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  public startDateTime!: string

  /**
   * Message_ Info. End. Date_ Time
   * urn:x-enexis:ecdm:uid:1:569257
   * Until what date-time should this message be shown, after this date/time this message SHALL be removed.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  public endDateTime!: string

  /**
   * During which transaction shall this message be shown.
   * Message SHALL be removed by the Charging Station after transaction has
   * ended.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 36)
  public transactionId!: string

  @ApiProperty()
  @IsNotEmpty()
  public message: MessageContentDto
}
