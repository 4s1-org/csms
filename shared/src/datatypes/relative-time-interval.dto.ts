// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'

/**
 * Relative_ Timer_ Interval
 * urn:x-oca:ocpp:uid:2:233270
 */
export class RelativeTimeIntervalDto extends DatatypeBaseDto {
  public constructor(
    start: number,
  ) {
    super()
    this.start = start
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Relative_ Timer_ Interval. Start. Elapsed_ Time
   * urn:x-oca:ocpp:uid:1:569279
   * Start of the interval, in seconds from NOW.
   */
  public start: number

  /**
   * Relative_ Timer_ Interval. Duration. Elapsed_ Time
   * urn:x-oca:ocpp:uid:1:569280
   * Duration of the interval, in seconds.
   */
  public duration!: number
}
