// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class GetLocalListVersionResponseDto {
  public constructor(
    versionNumber: number,
  ) {
    this.versionNumber = versionNumber
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * This contains the current version number of the local authorization list in the Charging Station.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public versionNumber: number
}
