// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GetVariableResultDto } from '../datatypes/get-variable-result.dto'

/**
 * This contains the field definition of the GetVariablesResponse PDU sent by the CSMS to the Charging Station in response to GetVariablesRequest.
 */
export class GetVariablesResponseDto extends ResponseBaseDto {
  private _className: "GetVariablesResponseDto" = "GetVariablesResponseDto"

  public constructor(
    getVariableResult: GetVariableResultDto[],
  ) {
    super()
    this.getVariableResult = getVariableResult
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * List of requested variables and their values.
   * Required: true
   * GetVariableResultType
   * 1..*
   */
  @Type(() => GetVariableResultDto)
  public getVariableResult: GetVariableResultDto[]
}
