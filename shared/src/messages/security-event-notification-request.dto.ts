// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class SecurityEventNotificationRequestDto extends RequestBaseDto {
  public constructor(
    type: string,
    timestamp: string,
  ) {
    super()
    this.type = type
    this.timestamp = timestamp
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Type of the security event. This value should be taken from the Security events list.
   */
  public type: string

  /**
   * Date and time at which the event occurred.
   */
  public timestamp: string

  /**
   * Additional information about the occurred security event.
   */
  public techInfo!: string
}
