// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { EvseDto } from '../datatypes/evse.dto'
import { MessageTriggerEnum } from '../enumerations/message-trigger.enum'

export class TriggerMessageRequestDto extends RequestBaseDto {
  public constructor(
    requestedMessage: MessageTriggerEnum,
  ) {
    super()
    this.requestedMessage = requestedMessage
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  @IsOptional()
  @Type(() => EvseDto)
  @ValidateNested()
  public evse!: EvseDto

  @IsNotEmpty()
  @IsEnum(MessageTriggerEnum)
  public requestedMessage: MessageTriggerEnum
}
