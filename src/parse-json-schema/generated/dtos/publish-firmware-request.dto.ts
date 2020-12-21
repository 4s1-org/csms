// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class PublishFirmwareRequestDto {
  public constructor(
    location: string,
    checksum: string,
    requestId: number,
  ) {
    this.location = location
    this.checksum = checksum
    this.requestId = requestId
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * This contains a string containing a URI pointing to a
   * location from which to retrieve the firmware.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 512)
  public location: string

  /**
   * This specifies how many times Charging Station must try
   * to download the firmware before giving up. If this field is not
   * present, it is left to Charging Station to decide how many times it wants to retry.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public retries!: number

  /**
   * The MD5 checksum over the entire firmware file as a hexadecimal string of length 32.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 32)
  public checksum: string

  /**
   * The Id of the request.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  /**
   * The interval in seconds
   * after which a retry may be
   * attempted. If this field is not
   * present, it is left to Charging
   * Station to decide how long to wait
   * between attempts.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public retryInterval!: number
}
