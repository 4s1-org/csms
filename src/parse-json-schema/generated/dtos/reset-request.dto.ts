// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ResetEnum } from '../enums/reset.enum'

export class ResetRequestDto {
  public constructor(
    type: ResetEnum
  ) {
    this.type = type
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ResetEnum)
  public type: ResetEnum

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public evseId!: number
}
