// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, ValidateNested } from 'class-validator'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

/**
 * This contains the field definition of StatusNotificationResponse sent by the CSMS to the Charging Station in response to a StatusNotificationRequest. This message is deprecated. This message might be removed in a future version of OCPP. It will be replaced by Device Management Monitoring events.
 */
export class StatusNotificationResponseDto extends ResponseBaseDto {
  public constructor() {
    super()
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto
}
