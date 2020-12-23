// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsBoolean, IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ChargingLimitSourceEnum } from '../enumerations/charging-limit-source.enum'
import { ChargingProfileDto } from '../types/charging-profile.dto'
import { CustomDataDto } from '../types/custom-data.dto'

export class ReportChargingProfilesRequestDto {
  public constructor(
    requestId: number,
    chargingLimitSource: ChargingLimitSourceEnum,
    chargingProfile: ChargingProfileDto[],
    evseId: number,
  ) {
    this.requestId = requestId
    this.chargingLimitSource = chargingLimitSource
    this.chargingProfile = chargingProfile
    this.evseId = evseId
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Id used to match the <<getchargingprofilesrequest, GetChargingProfilesRequest>> message with the resulting ReportChargingProfilesRequest messages. When the CSMS provided a requestId in the <<getchargingprofilesrequest, GetChargingProfilesRequest>>, this field SHALL contain the same value.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ChargingLimitSourceEnum)
  public chargingLimitSource: ChargingLimitSourceEnum

  @ApiProperty()
  @IsNotEmpty()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public chargingProfile: ChargingProfileDto[]

  /**
   * To Be Continued. Default value when omitted: false. false indicates that there are no further messages as part of this report.
   */
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public tbc!: boolean

  /**
   * The evse to which the charging profile applies. If evseId = 0, the message contains an overall limit for the Charging Station.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evseId: number
}
