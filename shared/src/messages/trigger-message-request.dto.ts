// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

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

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsOptional()
  @ValidateNested()
  public evse!: EvseDto

  @IsNotEmpty()
  @IsEnum(MessageTriggerEnum)
  public requestedMessage: MessageTriggerEnum
}
