// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class HeartbeatResponseDto {
  public constructor(
    currentTime: string
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
  @IsString()
  public currentTime: string
}
