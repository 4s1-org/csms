// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingLimitSourceEnum } from '../enums/charging-limit-source.enum'

export class ReportChargingProfilesRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public requestId: number

  @ApiProperty()
  public chargingLimitSource: ChargingLimitSourceEnum

  @ApiProperty()
  public chargingProfile: any

  @IsOptional()
  @ApiProperty()
  public tbc: boolean

  @ApiProperty()
  public evseId: number
}
