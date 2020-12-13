// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsBoolean, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingLimitSourceEnum } from '../enums/charging-limit-source.enum'

export class ReportChargingProfilesRequestDto {
  public constructor () {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId!: number

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ChargingLimitSourceEnum)
  public chargingLimitSource!: ChargingLimitSourceEnum

  @ApiProperty()
  @IsNotEmpty()
  public chargingProfile!: any

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public tbc!: boolean

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evseId!: number
}
