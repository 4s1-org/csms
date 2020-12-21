// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsEnum, IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { MessagePriorityEnum } from '../enums/message-priority.enum'
import { MessageStateEnum } from '../enums/message-state.enum'

export class GetDisplayMessagesRequestDto {
  public constructor(
    requestId: number,
  ) {
    this.requestId = requestId
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * If provided the Charging Station shall return Display Messages of the given ids. This field SHALL NOT contain more ids than set in <<configkey-number-of-display-messages,NumberOfDisplayMessages.maxLimit>>
   */
  @ApiProperty()
  @IsOptional()
  // MinItems: 1
  @IsArray()
  public id!: number[]

  /**
   * The Id of this request.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  @ApiProperty()
  @IsOptional()
  @IsEnum(MessagePriorityEnum)
  public priority!: MessagePriorityEnum

  @ApiProperty()
  @IsOptional()
  @IsEnum(MessageStateEnum)
  public state!: MessageStateEnum
}
