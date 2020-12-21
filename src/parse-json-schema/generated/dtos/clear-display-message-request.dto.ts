// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class ClearDisplayMessageRequestDto {
  public constructor(
    id: number,
  ) {
    this.id = id
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Id of the message that SHALL be removed from the Charging Station.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public id: number
}
