// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class ClearDisplayMessageRequestDto extends RequestBaseDto {
  private _className: "ClearDisplayMessageRequestDto" = "ClearDisplayMessageRequestDto"

  public constructor(
    id: number,
  ) {
    super()
    this.id = id
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Id of the message that SHALL be removed from the Charging Station.
   */
  public id: number
}
