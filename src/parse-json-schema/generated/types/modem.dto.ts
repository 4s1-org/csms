// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'

/**
 * Wireless_ Communication_ Module
 * urn:x-oca:ocpp:uid:2:233306
 * Defines parameters required for initiating and maintaining wireless communication with other devices.
 */
export class ModemDto {
  public constructor() {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Wireless_ Communication_ Module. ICCID. CI20_ Text
   * urn:x-oca:ocpp:uid:1:569327
   * This contains the ICCID of the modem’s SIM card.
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(20)
  @IsString()
  public iccid!: string

  /**
   * Wireless_ Communication_ Module. IMSI. CI20_ Text
   * urn:x-oca:ocpp:uid:1:569328
   * This contains the IMSI of the modem’s SIM card.
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(20)
  @IsString()
  public imsi!: string
}
