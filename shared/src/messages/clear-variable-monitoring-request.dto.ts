// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class ClearVariableMonitoringRequestDto extends RequestBaseDto {
  public constructor(
    id: number[],
  ) {
    super()
    this.id = id
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * List of the monitors to be cleared, identified by there Id.
   */
  @IsNotEmpty()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public id: number[]
}
