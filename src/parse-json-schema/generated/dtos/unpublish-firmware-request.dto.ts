// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'

export class UnpublishFirmwareRequestDto {
  public constructor(
    checksum: string,
  ) {
    this.checksum = checksum
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * The MD5 checksum over the entire firmware file as a hexadecimal string of length 32.
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(32)
  @IsString()
  public checksum: string
}
