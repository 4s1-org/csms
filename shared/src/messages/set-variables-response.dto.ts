// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { SetVariableResultDto } from '../datatypes/set-variable-result.dto'

/**
 * This contains the field definition of the SetVariablesResponse PDU sent by the Charging Station to the CSMS in response to a SetVariablesRequest.
 */
export class SetVariablesResponseDto extends ResponseBaseDto {
  public constructor(
    setVariableResult: SetVariableResultDto[],
  ) {
    super()
    this.setVariableResult = setVariableResult
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * List of result statuses per Component-Variable.
   * Required: true
   * SetVariableResultType
   * 1..*
   */
  @Type(() => SetVariableResultDto)
  public setVariableResult: SetVariableResultDto[]
}
