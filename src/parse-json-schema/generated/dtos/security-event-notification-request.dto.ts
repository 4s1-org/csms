// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class SecurityEventNotificationRequestDto {
  public constructor(
    type: string,
    timestamp: string
  ) {
    this.type = type
    this.timestamp = timestamp
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Type of the security event. This value should be taken from the Security events list.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 50)
  @IsString()
  public type: string

  /**
   * Date and time at which the event occurred.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public timestamp: string

  /**
   * Additional information about the occurred security event.
   */
  @ApiProperty()
  @IsOptional()
  @Length(0, 255)
  @IsString()
  public techInfo!: string
}
