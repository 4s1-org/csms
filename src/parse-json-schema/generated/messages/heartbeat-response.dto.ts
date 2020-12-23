// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../types/custom-data.dto'

/**
 * This contains the field definition of the HeartbeatResponse PDU sent by the CSMS to the Charging Station in response to a HeartbeatRequest.
 */
export class HeartbeatResponseDto {
  public constructor(
    currentTime: string,
  ) {
    this.currentTime = currentTime
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Contains the current time of the CSMS.
   * Required: true
   * dateTime
   * 1..1
   */
  @ApiProperty()
  @IsNotEmpty()
  // setFormat: date-time
  @IsString()
  public currentTime: string
}
