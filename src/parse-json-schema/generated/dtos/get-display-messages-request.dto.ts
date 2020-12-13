// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { MessagePriorityEnum } from '../enums/message-priority.enum'
import { MessageStateEnum } from '../enums/message-state.enum'

export class GetDisplayMessagesRequestDto {
  public constructor () {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  public id!: any

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId!: number

  @ApiProperty()
  @IsOptional()
  @IsEnum(MessagePriorityEnum)
  public priority!: MessagePriorityEnum

  @ApiProperty()
  @IsOptional()
  @IsEnum(MessageStateEnum)
  public state!: MessageStateEnum
}
