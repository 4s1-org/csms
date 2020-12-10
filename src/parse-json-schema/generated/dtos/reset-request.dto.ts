// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ResetEnum } from '../enums/reset.enum'

export class ResetRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public type: ResetEnum

  @IsOptional()
  @ApiProperty()
  public evseId: number
}
