// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { CostKindEnum } from '../enums/cost-kind.enum'

/**
 * Cost
urn:x-oca:ocpp:uid:2:233258
 */
export class CostDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(CostKindEnum)
  public costKind!: CostKindEnum

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public amount!: number

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public amountMultiplier!: number
}
