// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class UnpublishFirmwareRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: 'UnpublishFirmwareRequestDto' = 'UnpublishFirmwareRequestDto'

  public constructor(
    checksum: string,
  ) {
    super()
    this.checksum = checksum
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * The MD5 checksum over the entire firmware file as a hexadecimal string of length 32.
   */
  public checksum: string
}
