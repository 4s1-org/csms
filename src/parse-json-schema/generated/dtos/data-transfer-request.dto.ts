// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'

export class DataTransferRequestDto {
  public constructor(
    vendorId: string,
  ) {
    this.vendorId = vendorId
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * May be used to indicate a specific message or implementation.
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(50)
  @IsString()
  public messageId!: string

  /**
   * Data without specified length or format. This needs to be decided by both parties (Open to implementation).
   */
  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public data!: any

  /**
   * This identifies the Vendor specific implementation
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(255)
  @IsString()
  public vendorId: string
}
