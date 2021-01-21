// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { RegistrationStatusEnum } from '../enumerations/registration-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

/**
 * This contains the field definition of the BootNotificationResponse PDU sent by the CSMS to the Charging Station in response to a BootNotificationRequest.
 */
export class BootNotificationResponseDto extends ResponseBaseDto {
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
   * When <<cmn_registrationstatusenumtype,Status>> is Accepted, this contains the heartbeat interval in seconds. If the CSMS returns something other than Accepted, the value of the interval field indicates the minimum wait time before sending a next BootNotification request.
   */
  public interval: number

  public status: RegistrationStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
