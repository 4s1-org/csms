// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class DataTransferRequestDto extends RequestBaseDto {
  public constructor(
    vendorId: string,
  ) {
    super()
    this.vendorId = vendorId
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * May be used to indicate a specific message or implementation.
   */
  @IsOptional()
  @MaxLength(50)
  @IsString()
  public messageId!: string

  /**
   * Data without specified length or format. This needs to be decided by both parties (Open to implementation).
   */
  @IsOptional()
  public data!: any

  /**
   * This identifies the Vendor specific implementation
   */
  @IsNotEmpty()
  @MaxLength(255)
  @IsString()
  public vendorId: string
}
