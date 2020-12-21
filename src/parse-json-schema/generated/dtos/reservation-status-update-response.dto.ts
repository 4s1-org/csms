// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'

export class ReservationStatusUpdateResponseDto {

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto
}
