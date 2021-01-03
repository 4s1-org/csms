// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { ResetEnum } from '../enumerations/reset.enum'

export class ResetRequestDto implements IRequestMessage {
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
