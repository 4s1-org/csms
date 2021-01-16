// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { ResetEnum } from '../enumerations/reset.enum'

export class ResetRequestDto extends RequestBaseDto {
  public constructor(
    type: ResetEnum,
  ) {
    super()
    this.type = type
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(ResetEnum)
  public type: ResetEnum

  /**
   * This contains the ID of a specific EVSE that needs to be reset, instead of the entire Charging Station.
   */
  @IsOptional()
  @IsInt()
  public evseId!: number
}
