// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingLimitSourceEnum } from '../enums/charging-limit-source.enum'

export class ReportChargingProfilesRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public requestId!: number

  @IsNotEmpty()
  @ApiProperty()
  public chargingLimitSource!: ChargingLimitSourceEnum

  @IsNotEmpty()
  @ApiProperty()
  public chargingProfile!: any

  @IsOptional()
  @ApiProperty()
  public tbc!: boolean

  @IsNotEmpty()
  @ApiProperty()
  public evseId!: number
}
