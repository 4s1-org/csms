// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class NotifyDisplayMessagesResponseDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto
}
