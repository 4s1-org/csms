// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { RegistrationStatusEnum } from '../enumerations/registration-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

/**
 * This contains the field definition of the BootNotificationResponse PDU sent by the CSMS to the Charging Station in response to a BootNotificationRequest.
 */
export class BootNotificationResponseDto extends ResponseBaseDto {
  @Exclude()
  private _className: 'BootNotificationResponseDto' = 'BootNotificationResponseDto'

  public constructor(
    currentTime: string,
    interval: number,
    status: RegistrationStatusEnum,
  ) {
    super()
    this.currentTime = currentTime
    this.interval = interval
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * This contains the CSMS’s current time.
   * Required: true
   * dateTime
   * 1..1
   */
  public currentTime: string

  /**
   * When Status is Accepted, this contains the heartbeat interval in seconds. If the CSMS returns something other than Accepted, the value of the interval field indicates the minimum wait time before sending a next BootNotification request.
   * Required: true
   * integer
   * 1..1
   */
  public interval: number

  /**
   * This contains whether the Charging Station has been registered within the CSMS.
   * Required: true
   * RegistrationStatusEnumType
   * 1..1
   */
  public status: RegistrationStatusEnum

  /**
   * Detailed status information.
   * Required: false
   * StatusInfoType
   * 0..1
   */
  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
