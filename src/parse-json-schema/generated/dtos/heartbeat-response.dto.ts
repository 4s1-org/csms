// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class HeartbeatResponseDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  /**
   * Contains the current time of the CSMS.
   */
  @ApiProperty()
  public currentTime: string
}
