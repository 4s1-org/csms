// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsDateString, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'

/**
 * This contains the field definition of the HeartbeatResponse PDU sent by the CSMS to the Charging Station in response to a HeartbeatRequest.
 */
export class HeartbeatResponseDto implements IResponseMessage {
  public constructor(
    currentTime: string,
  ) {
    this.currentTime = currentTime
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Contains the current time of the CSMS.
   * Required: true
   * dateTime
   * 1..1
   */
  @IsNotEmpty()
  @IsDateString()
  public currentTime: string
}
