// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingNeedsDto } from './charging-needs.dto'

export class NotifyEVChargingNeedsRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public maxScheduleTuples!: number

  @IsNotEmpty()
  @ApiProperty()
  public chargingNeeds!: ChargingNeedsDto

  @IsNotEmpty()
  @ApiProperty()
  public evseId!: number
}
