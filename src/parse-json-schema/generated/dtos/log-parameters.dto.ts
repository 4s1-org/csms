// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'

/**
 * Log
 * urn:x-enexis:ecdm:uid:2:233373
 * Generic class for the configuration of logging entries.
 */
export class LogParametersDto {
  public constructor(
    remoteLocation: string,
  ) {
    this.remoteLocation = remoteLocation
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Log. Remote_ Location. URI
   * urn:x-enexis:ecdm:uid:1:569484
   * The URL of the location at the remote system where the log should be stored.
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(512)
  @IsString()
  public remoteLocation: string

  /**
   * Log. Oldest_ Timestamp. Date_ Time
   * urn:x-enexis:ecdm:uid:1:569477
   * This contains the date and time of the oldest logging information to include in the diagnostics.
   */
  @ApiProperty()
  @IsOptional()
  // setFormat: date-time
  @IsString()
  public oldestTimestamp!: string

  /**
   * Log. Latest_ Timestamp. Date_ Time
   * urn:x-enexis:ecdm:uid:1:569482
   * This contains the date and time of the latest logging information to include in the diagnostics.
   */
  @ApiProperty()
  @IsOptional()
  // setFormat: date-time
  @IsString()
  public latestTimestamp!: string
}
