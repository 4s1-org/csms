// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../dtos/custom-data.dto'

export class NotifyEventResponseDto {

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto
}
