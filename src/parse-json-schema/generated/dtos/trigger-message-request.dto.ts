// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { EVSEDto } from './evse.dto'
import { MessageTriggerEnum } from '../enums/message-trigger.enum'

export class TriggerMessageRequestDto {
  public constructor (
    requestedMessage: MessageTriggerEnum
  ) {
    this.requestedMessage = requestedMessage
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  public evse!: EVSEDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(MessageTriggerEnum)
  public requestedMessage: MessageTriggerEnum
}
