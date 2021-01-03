// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { EvseDto } from '../datatypes/evse.dto'
import { MessageTriggerEnum } from '../enumerations/message-trigger.enum'

export class TriggerMessageRequestDto implements IRequestMessage {
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
  public evse!: EvseDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(MessageTriggerEnum)
  public requestedMessage: MessageTriggerEnum
}
