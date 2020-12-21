// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'

export class UnpublishFirmwareRequestDto {
  public constructor(
    checksum: string,
  ) {
    this.checksum = checksum
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * The MD5 checksum over the entire firmware file as a hexadecimal string of length 32.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 32)
  public checksum: string
}
