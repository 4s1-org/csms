// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'

/**
 * Firmware
 * urn:x-enexis:ecdm:uid:2:233291
 * Represents a copy of the firmware that can be loaded/updated on the Charging Station.
 */
export class FirmwareDto {
  public constructor(
    location: string,
    retrieveDateTime: string,
  ) {
    this.location = location
    this.retrieveDateTime = retrieveDateTime
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Firmware. Location. URI
   * urn:x-enexis:ecdm:uid:1:569460
   * URI defining the origin of the firmware.
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(512)
  @IsString()
  public location: string

  /**
   * Firmware. Retrieve. Date_ Time
   * urn:x-enexis:ecdm:uid:1:569461
   * Date and time at which the firmware shall be retrieved.
   */
  @ApiProperty()
  @IsNotEmpty()
  // setFormat: date-time
  @IsString()
  public retrieveDateTime: string

  /**
   * Firmware. Install. Date_ Time
   * urn:x-enexis:ecdm:uid:1:569462
   * Date and time at which the firmware shall be installed.
   */
  @ApiProperty()
  @IsOptional()
  // setFormat: date-time
  @IsString()
  public installDateTime!: string

  /**
   * Certificate with which the firmware was signed.
   * PEM encoded X.509 certificate.
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(5500)
  @IsString()
  public signingCertificate!: string

  /**
   * Firmware. Signature. Signature
   * urn:x-enexis:ecdm:uid:1:569464
   * Base64 encoded firmware signature.
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(800)
  @IsString()
  public signature!: string
}
