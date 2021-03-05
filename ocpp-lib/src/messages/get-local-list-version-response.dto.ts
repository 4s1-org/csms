// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class GetLocalListVersionResponseDto extends ResponseBaseDto {
  private _className: "GetLocalListVersionResponseDto" = "GetLocalListVersionResponseDto"

  public constructor(
    versionNumber: number,
  ) {
    super()
    this.versionNumber = versionNumber
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * This contains the current version number of the local authorization list in the Charging Station.
   */
  public versionNumber: number
}
