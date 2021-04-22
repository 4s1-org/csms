// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { ChangeAvailabilityStatusEnum } from '../enumerations/change-availability-status.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { StatusInfoDto } from '../datatypes/status-info.dto'

/**
 * This contains the field definition of the ChangeAvailabilityResponse PDU sent by the Charging Station to the CSMS.
 */
export class ChangeAvailabilityResponseDto extends ResponseBaseDto {
  @Exclude()
  private _className: 'ChangeAvailabilityResponseDto' = 'ChangeAvailabilityResponseDto'

  public constructor(
    status: ChangeAvailabilityStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * This indicates whether the Charging Station is able to perform the availability change.
   * Required: true
   * ChangeAvailabilityStatusEnumType
   * 1..1
   */
  public status: ChangeAvailabilityStatusEnum

  /**
   * Detailed status information.
   * Required: false
   * StatusInfoType
   * 0..1
   */
  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
