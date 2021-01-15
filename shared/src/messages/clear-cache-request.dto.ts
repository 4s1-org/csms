// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, ValidateNested } from 'class-validator'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class ClearCacheRequestDto extends RequestBaseDto {
  public constructor() {
    super()
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto
}
