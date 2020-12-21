// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../dtos/custom-data.dto'
import { EVSEDto } from '../dtos/evse.dto'
import { MessageTriggerEnum } from '../enums/message-trigger.enum'

export class TriggerMessageRequestDto {
  public constructor(
    requestedMessage: MessageTriggerEnum,
  ) {
    this.requestedMessage = requestedMessage
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public evse!: EVSEDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(MessageTriggerEnum)
  public requestedMessage: MessageTriggerEnum
}
