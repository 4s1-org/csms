// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class ClearDisplayMessageRequestDto extends RequestBaseDto {
  public constructor(
    id: number,
  ) {
    super()
    this.id = id
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Id of the message that SHALL be removed from the Charging Station.
   */
  @IsNotEmpty()
  @IsInt()
  public id: number
}
