// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'

/**
 * Firmware
 * urn:x-enexis:ecdm:uid:2:233291
 * Represents a copy of the firmware that can be loaded/updated on the Charging Station.
 */
export class FirmwareDto extends DatatypeBaseDto {
  @Exclude()
  private _className: "FirmwareDto" = "FirmwareDto"

  public constructor(
    location: string,
    retrieveDateTime: string,
  ) {
    super()
    this.location = location
    this.retrieveDateTime = retrieveDateTime
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Firmware. Location. URI
   * urn:x-enexis:ecdm:uid:1:569460
   * URI defining the origin of the firmware.
   */
  public location: string

  /**
   * Firmware. Retrieve. Date_ Time
   * urn:x-enexis:ecdm:uid:1:569461
   * Date and time at which the firmware shall be retrieved.
   */
  public retrieveDateTime: string

  /**
   * Firmware. Install. Date_ Time
   * urn:x-enexis:ecdm:uid:1:569462
   * Date and time at which the firmware shall be installed.
   */
  public installDateTime!: string

  /**
   * Certificate with which the firmware was signed.
   * PEM encoded X.509 certificate.
   */
  public signingCertificate!: string

  /**
   * Firmware. Signature. Signature
   * urn:x-enexis:ecdm:uid:1:569464
   * Base64 encoded firmware signature.
   */
  public signature!: string
}
