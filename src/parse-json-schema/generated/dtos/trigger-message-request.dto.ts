// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { EVSEDto } from './evse.dto'
import { MessageTriggerEnum } from '../enums/message-trigger.enum'

export class TriggerMessageRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public evse: EVSEDto

  @ApiProperty()
  public requestedMessage: MessageTriggerEnum
}
