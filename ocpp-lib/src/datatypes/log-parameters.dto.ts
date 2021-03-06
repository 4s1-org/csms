// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'

/**
 * Log
 * urn:x-enexis:ecdm:uid:2:233373
 * Generic class for the configuration of logging entries.
 */
export class LogParametersDto extends DatatypeBaseDto {
  @Exclude()
  private _className: 'LogParametersDto' = 'LogParametersDto'

  public constructor(
    remoteLocation: string,
  ) {
    super()
    this.remoteLocation = remoteLocation
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Log. Remote_ Location. URI
   * urn:x-enexis:ecdm:uid:1:569484
   * The URL of the location at the remote system where the log should be stored.
   */
  public remoteLocation: string

  /**
   * Log. Oldest_ Timestamp. Date_ Time
   * urn:x-enexis:ecdm:uid:1:569477
   * This contains the date and time of the oldest logging information to include in the diagnostics.
   */
  public oldestTimestamp!: string

  /**
   * Log. Latest_ Timestamp. Date_ Time
   * urn:x-enexis:ecdm:uid:1:569482
   * This contains the date and time of the latest logging information to include in the diagnostics.
   */
  public latestTimestamp!: string
}
