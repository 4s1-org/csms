// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ChangeAvailabilityStatusEnum } from '../enumerations/change-availability-status.enum'
import { CustomDataDto } from '../types/custom-data.dto'
import { StatusInfoDto } from '../types/status-info.dto'

/**
 * This contains the field definition of the ChangeAvailabilityResponse PDU sent by the Charging Station to the CSMS.
 */
export class ChangeAvailabilityResponseDto {
  public constructor(
    status: ChangeAvailabilityStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * This indicates whether the Charging Station is able to perform the availability change.
   * Required: true
   * ChangeAvailabilityStatusEnumType
   * 1..1
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ChangeAvailabilityStatusEnum)
  public status: ChangeAvailabilityStatusEnum

  /**
   * Detailed status information.
   * Required: false
   * StatusInfoType
   * 0..1
   */
  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
