// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { MessagePriorityEnum } from '../enums/message-priority.enum'
import { MessageStateEnum } from '../enums/message-state.enum'

export class GetDisplayMessagesRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public id: any

  @ApiProperty()
  public requestId: number

  @IsOptional()
  @ApiProperty()
  public priority: MessagePriorityEnum

  @IsOptional()
  @ApiProperty()
  public state: MessageStateEnum
}
