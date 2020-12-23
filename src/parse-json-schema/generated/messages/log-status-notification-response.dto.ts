// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../types/custom-data.dto'

export class LogStatusNotificationResponseDto {

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto
}
