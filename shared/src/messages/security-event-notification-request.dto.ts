// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsDateString, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class SecurityEventNotificationRequestDto extends RequestBaseDto {
  public constructor(
    type: string,
    timestamp: string,
  ) {
    super()
    this.type = type
    this.timestamp = timestamp
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Type of the security event. This value should be taken from the Security events list.
   */
  @IsNotEmpty()
  @MaxLength(50)
  @IsString()
  public type: string

  /**
   * Date and time at which the event occurred.
   */
  @IsNotEmpty()
  @IsDateString()
  public timestamp: string

  /**
   * Additional information about the occurred security event.
   */
  @IsOptional()
  @MaxLength(255)
  @IsString()
  public techInfo!: string
}
