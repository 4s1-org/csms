// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Wireless_ Communication_ Module
urn:x-oca:ocpp:uid:2:233306
Defines parameters required for initiating and maintaining wireless communication with other devices.
 */
export class ModemDto {
  public constructor() {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Wireless_ Communication_ Module. ICCID. CI20_ Text
urn:x-oca:ocpp:uid:1:569327
This contains the ICCID of the modem’s SIM card.
   */
  @ApiProperty()
  @IsOptional()
  @Length(0, 20)
  @IsString()
  public iccid!: string

  /**
   * Wireless_ Communication_ Module. IMSI. CI20_ Text
urn:x-oca:ocpp:uid:1:569328
This contains the IMSI of the modem’s SIM card.
   */
  @ApiProperty()
  @IsOptional()
  @Length(0, 20)
  @IsString()
  public imsi!: string
}
