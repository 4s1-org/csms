// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class PublishFirmwareRequestDto {
  public constructor (
    requestId: number
  ) {
    this.requestId = requestId
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * This contains a string containing a URI pointing to a
location from which to retrieve the firmware.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 512)
  @IsString()
  public location!: string

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public retries!: number

  /**
   * The MD5 checksum over the entire firmware file as a hexadecimal string of length 32.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 32)
  @IsString()
  public checksum!: string

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId!: number

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public retryInterval!: number
}
