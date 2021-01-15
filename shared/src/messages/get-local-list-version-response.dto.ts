// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class GetLocalListVersionResponseDto extends ResponseBaseDto {
  public constructor(
    versionNumber: number,
  ) {
    super()
    this.versionNumber = versionNumber
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * This contains the current version number of the local authorization list in the Charging Station.
   */
  @IsNotEmpty()
  @IsInt()
  public versionNumber: number
}
