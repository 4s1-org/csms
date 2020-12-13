// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { EVSEDto } from './evse.dto'
import { MessageTriggerEnum } from '../enums/message-trigger.enum'

export class TriggerMessageRequestDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  public evse!: EVSEDto

  @ApiProperty()
  @IsNotEmpty()
  public requestedMessage!: MessageTriggerEnum
}
