// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class GetLocalListVersionResponseDto implements IResponseMessage {
  public constructor(
    versionNumber: number,
  ) {
    this.versionNumber = versionNumber
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * This contains the current version number of the local authorization list in the Charging Station.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public versionNumber: number
}
