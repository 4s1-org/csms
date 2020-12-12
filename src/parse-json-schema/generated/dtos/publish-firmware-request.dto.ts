// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class PublishFirmwareRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  /**
   * This contains a string containing a URI pointing to a
location from which to retrieve the firmware.
   */
  @IsNotEmpty()
  @Length(0, 512)
  @ApiProperty()
  public location!: string

  @IsOptional()
  @ApiProperty()
  public retries!: number

  /**
   * The MD5 checksum over the entire firmware file as a hexadecimal string of length 32.
   */
  @IsNotEmpty()
  @Length(0, 32)
  @ApiProperty()
  public checksum!: string

  @IsNotEmpty()
  @ApiProperty()
  public requestId!: number

  @IsOptional()
  @ApiProperty()
  public retryInterval!: number
}
