// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

/**
 * This contains the field definition of the HeartbeatResponse PDU sent by the CSMS to the Charging Station in response to a HeartbeatRequest.
 */
export class HeartbeatResponseDto extends ResponseBaseDto {
  private _className: "HeartbeatResponseDto" = "HeartbeatResponseDto"

  public constructor(
    currentTime: string,
  ) {
    super()
    this.currentTime = currentTime
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Contains the current time of the CSMS.
   * Required: true
   * dateTime
   * 1..1
   */
  public currentTime: string
}
