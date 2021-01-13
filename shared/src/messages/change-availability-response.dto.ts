// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { ChangeAvailabilityStatusEnum } from '../enumerations/change-availability-status.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { StatusInfoDto } from '../datatypes/status-info.dto'

/**
 * This contains the field definition of the ChangeAvailabilityResponse PDU sent by the Charging Station to the CSMS.
 */
export class ChangeAvailabilityResponseDto implements IResponseMessage {
  public constructor(
    status: ChangeAvailabilityStatusEnum,
  ) {
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * This indicates whether the Charging Station is able to perform the availability change.
   * Required: true
   * ChangeAvailabilityStatusEnumType
   * 1..1
   */
  @IsNotEmpty()
  @IsEnum(ChangeAvailabilityStatusEnum)
  public status: ChangeAvailabilityStatusEnum

  /**
   * Detailed status information.
   * Required: false
   * StatusInfoType
   * 0..1
   */
  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
