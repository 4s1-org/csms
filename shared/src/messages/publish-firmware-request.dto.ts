// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class PublishFirmwareRequestDto extends RequestBaseDto {
  public constructor(
    location: string,
    checksum: string,
    requestId: number,
  ) {
    super()
    this.location = location
    this.checksum = checksum
    this.requestId = requestId
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * This contains a string containing a URI pointing to a
   * location from which to retrieve the firmware.
   */
  public location: string

  /**
   * This specifies how many times Charging Station must try
   * to download the firmware before giving up. If this field is not
   * present, it is left to Charging Station to decide how many times it wants to retry.
   */
  public retries!: number

  /**
   * The MD5 checksum over the entire firmware file as a hexadecimal string of length 32.
   */
  public checksum: string

  /**
   * The Id of the request.
   */
  public requestId: number

  /**
   * The interval in seconds
   * after which a retry may be
   * attempted. If this field is not
   * present, it is left to Charging
   * Station to decide how long to wait
   * between attempts.
   */
  public retryInterval!: number
}
