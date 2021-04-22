// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GetVariableDataDto } from '../datatypes/get-variable-data.dto'

/**
 * This contains the field definition of the GetVariablesRequest PDU sent by the CSMS to the Charging Station.
 */
export class GetVariablesRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: 'GetVariablesRequestDto' = 'GetVariablesRequestDto'

  public constructor(
    getVariableData: GetVariableDataDto[],
  ) {
    super()
    this.getVariableData = getVariableData
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * List of requested variables.
   * Required: true
   * GetVariableDataType
   * 1..*
   */
  @Type(() => GetVariableDataDto)
  public getVariableData: GetVariableDataDto[]
}
