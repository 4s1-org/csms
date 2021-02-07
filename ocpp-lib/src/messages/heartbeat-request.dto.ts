// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

/**
 * This contains the field definition of the HeartbeatRequest PDU sent by the Charging Station to the CSMS. No fields are defined.
 */
export class HeartbeatRequestDto extends RequestBaseDto {
  public constructor() {
    super()
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto
}