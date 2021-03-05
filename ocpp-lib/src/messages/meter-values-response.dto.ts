// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

/**
 * This contains the field definition of the MeterValuesResponse PDU sent by the CSMS to the Charging Station in response to a MeterValuesRequest PDU. This message is deprecated. This message might be removed in a future version of OCPP. It will be replaced by Device Management Monitoring events.
 */
export class MeterValuesResponseDto extends ResponseBaseDto {
  @Exclude()
  private _className: "MeterValuesResponseDto" = "MeterValuesResponseDto"

  public constructor() {
    super()
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto
}
