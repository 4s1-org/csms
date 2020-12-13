// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsString, IsEnum, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingProfilePurposeEnum } from '../enums/charging-profile-purpose.enum'
import { ChargingProfileKindEnum } from '../enums/charging-profile-kind.enum'
import { RecurrencyKindEnum } from '../enums/recurrency-kind.enum'

/**
 * Charging_ Profile
urn:x-oca:ocpp:uid:2:233255
A ChargingProfile consists of ChargingSchedule, describing the amount of power or current that can be delivered per time interval.
 */
export class ChargingProfileDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public id!: number

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public stackLevel!: number

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ChargingProfilePurposeEnum)
  public chargingProfilePurpose!: ChargingProfilePurposeEnum

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ChargingProfileKindEnum)
  public chargingProfileKind!: ChargingProfileKindEnum

  @ApiProperty()
  @IsOptional()
  @IsEnum(RecurrencyKindEnum)
  public recurrencyKind!: RecurrencyKindEnum

  /**
   * Charging_ Profile. Valid_ From. Date_ Time
urn:x-oca:ocpp:uid:1:569234
Point in time at which the profile starts to be valid. If absent, the profile is valid as soon as it is received by the Charging Station.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  public validFrom!: string

  /**
   * Charging_ Profile. Valid_ To. Date_ Time
urn:x-oca:ocpp:uid:1:569235
Point in time at which the profile stops to be valid. If absent, the profile is valid until it is replaced by another profile.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  public validTo!: string

  @ApiProperty()
  @IsNotEmpty()
  public chargingSchedule!: any

  /**
   * SHALL only be included if ChargingProfilePurpose is set to TxProfile. The transactionId is used to match the profile to a specific transaction.
   */
  @ApiProperty()
  @IsOptional()
  @Length(0, 36)
  @IsString()
  public transactionId!: string
}
