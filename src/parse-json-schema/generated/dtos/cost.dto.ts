// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { CostKindEnum } from '../enums/cost-kind.enum'

/**
 * Cost
urn:x-oca:ocpp:uid:2:233258
 */
export class CostDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public costKind: CostKindEnum

  @ApiProperty()
  public amount: number

  @IsOptional()
  @ApiProperty()
  public amountMultiplier: number
}
