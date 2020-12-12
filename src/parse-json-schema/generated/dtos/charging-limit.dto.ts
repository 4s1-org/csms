// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingLimitSourceEnum } from '../enums/charging-limit-source.enum'

/**
 * Charging_ Limit
urn:x-enexis:ecdm:uid:2:234489
 */
export class ChargingLimitDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public chargingLimitSource!: ChargingLimitSourceEnum

  @IsOptional()
  @ApiProperty()
  public isGridCritical!: boolean
}
