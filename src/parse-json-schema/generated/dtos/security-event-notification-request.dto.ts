// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'

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
  public customData!: CustomDataDto

  /**
   * Type of the security event. This value should be taken from the Security events list.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 50)
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
  @IsString()
  @Length(0, 255)
  public techInfo!: string
}
