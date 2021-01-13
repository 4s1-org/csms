// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class ClearDisplayMessageRequestDto implements IRequestMessage {
  public constructor(
    id: number,
  ) {
    this.id = id
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Id of the message that SHALL be removed from the Charging Station.
   */
  @IsNotEmpty()
  @IsInt()
  public id: number
}
