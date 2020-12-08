import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Log
urn:x-enexis:ecdm:uid:2:233373
Generic class for the configuration of logging entries.
 */
export class LogParametersDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  /**
   * Log. Remote_ Location. URI
urn:x-enexis:ecdm:uid:1:569484
The URL of the location at the remote system where the log should be stored.
   */
  @Length(0, 512)
  @ApiProperty()
  public remoteLocation: string

  /**
   * Log. Oldest_ Timestamp. Date_ Time
urn:x-enexis:ecdm:uid:1:569477
This contains the date and time of the oldest logging information to include in the diagnostics.
   */
  @IsOptional()
  @ApiProperty()
  public oldestTimestamp: string

  /**
   * Log. Latest_ Timestamp. Date_ Time
urn:x-enexis:ecdm:uid:1:569482
This contains the date and time of the latest logging information to include in the diagnostics.
   */
  @IsOptional()
  @ApiProperty()
  public latestTimestamp: string
}
