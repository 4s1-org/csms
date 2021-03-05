// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class DataTransferRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: "DataTransferRequestDto" = "DataTransferRequestDto"

  public constructor(
    vendorId: string,
  ) {
    super()
    this.vendorId = vendorId
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * May be used to indicate a specific message or implementation.
   */
  public messageId!: string

  /**
   * Data without specified length or format. This needs to be decided by both parties (Open to implementation).
   */
  public data!: any

  /**
   * This identifies the Vendor specific implementation
   */
  public vendorId: string
}
