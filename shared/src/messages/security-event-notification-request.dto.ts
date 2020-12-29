// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsDateString, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class SecurityEventNotificationRequestDto {
  public constructor(
    type: string,
    timestamp: string,
  ) {
    this.type = type
    this.timestamp = timestamp
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Type of the security event. This value should be taken from the Security events list.
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(50)
  @IsString()
  public type: string

  /**
   * Date and time at which the event occurred.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  public timestamp: string

  /**
   * Additional information about the occurred security event.
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(255)
  @IsString()
  public techInfo!: string
}
