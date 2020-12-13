// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class UnpublishFirmwareRequestDto {
  public constructor (
    checksum: string
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
  @Length(0, 32)
  @IsString()
  public checksum: string
}
