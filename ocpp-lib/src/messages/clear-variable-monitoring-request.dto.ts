// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class ClearVariableMonitoringRequestDto extends RequestBaseDto {
  private _className: "ClearVariableMonitoringRequestDto" = "ClearVariableMonitoringRequestDto"

  public constructor(
    id: number[],
  ) {
    super()
    this.id = id
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * List of the monitors to be cleared, identified by there Id.
   */
  public id: number[]
}
