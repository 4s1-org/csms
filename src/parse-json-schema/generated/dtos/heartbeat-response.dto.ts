// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'

export class HeartbeatResponseDto {
  public constructor(
    currentTime: string,
  ) {
    this.currentTime = currentTime
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Contains the current time of the CSMS.
   */
  @ApiProperty()
  @IsNotEmpty()
  // setFormat: date-time
  @IsString()
  public currentTime: string
}
