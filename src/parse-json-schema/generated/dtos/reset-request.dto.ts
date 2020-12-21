// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { ResetEnum } from '../enums/reset.enum'

export class ResetRequestDto {
  public constructor(
    type: ResetEnum,
  ) {
    this.type = type
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ResetEnum)
  public type: ResetEnum

  /**
   * This contains the ID of a specific EVSE that needs to be reset, instead of the entire Charging Station.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public evseId!: number
}
