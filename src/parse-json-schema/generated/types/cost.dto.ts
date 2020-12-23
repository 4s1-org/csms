// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CostKindEnum } from '../enums/cost-kind.enum'
import { CustomDataDto } from './custom-data.dto'

/**
 * Cost
 * urn:x-oca:ocpp:uid:2:233258
 */
export class CostDto {
  public constructor(
    costKind: CostKindEnum,
    amount: number,
  ) {
    this.costKind = costKind
    this.amount = amount
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(CostKindEnum)
  public costKind: CostKindEnum

  /**
   * Cost. Amount. Amount
   * urn:x-oca:ocpp:uid:1:569244
   * The estimated or actual cost per kWh
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public amount: number

  /**
   * Cost. Amount_ Multiplier. Integer
   * urn:x-oca:ocpp:uid:1:569245
   * Values: -3..3, The amountMultiplier defines the exponent to base 10 (dec). The final value is determined by: amount * 10 ^ amountMultiplier
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public amountMultiplier!: number
}
