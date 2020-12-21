// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsOptional } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'

export class HeartbeatRequestDto {

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto
}
