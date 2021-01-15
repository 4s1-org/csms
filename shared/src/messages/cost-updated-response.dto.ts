// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, ValidateNested } from 'class-validator'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class CostUpdatedResponseDto extends ResponseBaseDto {
  public constructor() {
    super()
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto
}
