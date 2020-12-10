// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class SecurityEventNotificationRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  /**
   * Type of the security event. This value should be taken from the Security events list.
   */
  @Length(0, 50)
  @ApiProperty()
  public type: string

  /**
   * Date and time at which the event occurred.
   */
  @ApiProperty()
  public timestamp: string

  /**
   * Additional information about the occurred security event.
   */
  @IsOptional()
  @Length(0, 255)
  @ApiProperty()
  public techInfo: string
}
