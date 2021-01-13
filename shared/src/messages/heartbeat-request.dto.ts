// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'

/**
 * This contains the field definition of the HeartbeatRequest PDU sent by the Charging Station to the CSMS. No fields are defined.
 */
export class HeartbeatRequestDto implements IRequestMessage {
  public constructor() {
    // nothing to do
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto
}
