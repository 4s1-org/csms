// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Firmware
urn:x-enexis:ecdm:uid:2:233291
Represents a copy of the firmware that can be loaded/updated on the Charging Station.
 */
export class FirmwareDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  /**
   * Firmware. Location. URI
urn:x-enexis:ecdm:uid:1:569460
URI defining the origin of the firmware.
   */
  @Length(0, 512)
  @ApiProperty()
  public location: string

  /**
   * Firmware. Retrieve. Date_ Time
urn:x-enexis:ecdm:uid:1:569461
Date and time at which the firmware shall be retrieved.
   */
  @ApiProperty()
  public retrieveDateTime: string

  /**
   * Firmware. Install. Date_ Time
urn:x-enexis:ecdm:uid:1:569462
Date and time at which the firmware shall be installed.
   */
  @IsOptional()
  @ApiProperty()
  public installDateTime: string

  /**
   * Certificate with which the firmware was signed.
PEM encoded X.509 certificate.
   */
  @IsOptional()
  @Length(0, 5500)
  @ApiProperty()
  public signingCertificate: string

  /**
   * Firmware. Signature. Signature
urn:x-enexis:ecdm:uid:1:569464
Base64 encoded firmware signature.
   */
  @IsOptional()
  @Length(0, 800)
  @ApiProperty()
  public signature: string
}
