// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class DataTransferRequestDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * May be used to indicate a specific message or implementation.
   */
  @ApiProperty()
  @IsOptional()
  @Length(0, 50)
  @IsString()
  public messageId!: string

  /**
   * Data without specified length or format. This needs to be decided by both parties (Open to implementation).
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  public data!: string

  /**
   * This identifies the Vendor specific implementation
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 255)
  @IsString()
  public vendorId!: string
}
