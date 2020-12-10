// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class DataTransferRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  /**
   * May be used to indicate a specific message or implementation.
   */
  @IsOptional()
  @Length(0, 50)
  @ApiProperty()
  public messageId: string

  /**
   * Data without specified length or format. This needs to be decided by both parties (Open to implementation).
   */
  @IsOptional()
  @ApiProperty()
  public data: string

  /**
   * This identifies the Vendor specific implementation
   */
  @Length(0, 255)
  @ApiProperty()
  public vendorId: string
}
