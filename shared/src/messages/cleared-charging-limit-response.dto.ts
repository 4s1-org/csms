// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class ClearedChargingLimitResponseDto implements IResponseMessage {
  public constructor() {
    // nothing to do
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto
}
