// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CostKindEnum } from '../enumerations/cost-kind.enum'
import { CustomDataDto } from './custom-data.dto'

/**
 * Cost
 * urn:x-oca:ocpp:uid:2:233258
 */
export class CostDto extends DatatypeBaseDto {
  public constructor(
    costKind: CostKindEnum,
    amount: number,
  ) {
    super()
    this.costKind = costKind
    this.amount = amount
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(CostKindEnum)
  public costKind: CostKindEnum

  /**
   * Cost. Amount. Amount
   * urn:x-oca:ocpp:uid:1:569244
   * The estimated or actual cost per kWh
   */
  @IsNotEmpty()
  @IsInt()
  public amount: number

  /**
   * Cost. Amount_ Multiplier. Integer
   * urn:x-oca:ocpp:uid:1:569245
   * Values: -3..3, The amountMultiplier defines the exponent to base 10 (dec). The final value is determined by: amount * 10 ^ amountMultiplier
   */
  @IsOptional()
  @IsInt()
  public amountMultiplier!: number
}
