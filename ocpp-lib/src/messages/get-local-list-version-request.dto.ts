// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class GetLocalListVersionRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: 'GetLocalListVersionRequestDto' = 'GetLocalListVersionRequestDto'

  public constructor() {
    super()
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto
}
