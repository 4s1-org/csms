// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class DataTransferRequestDto {
  public constructor(
    vendorId: string,
  ) {
    this.vendorId = vendorId
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * May be used to indicate a specific message or implementation.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 50)
  public messageId!: string

  @ApiProperty()
  @IsOptional()
  public data!: any

  /**
   * This identifies the Vendor specific implementation
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 255)
  public vendorId: string
}
