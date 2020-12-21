// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { FirmwareDto } from './firmware.dto'

export class UpdateFirmwareRequestDto {
  public constructor(
    requestId: number,
    firmware: FirmwareDto,
  ) {
    this.requestId = requestId
    this.firmware = firmware
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * This specifies how many times Charging Station must try to download the firmware before giving up. If this field is not present, it is left to Charging Station to decide how many times it wants to retry.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public retries!: number

  /**
   * The interval in seconds after which a retry may be attempted. If this field is not present, it is left to Charging Station to decide how long to wait between attempts.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public retryInterval!: number

  /**
   * The Id of this request
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  @ApiProperty()
  @IsNotEmpty()
  public firmware: FirmwareDto
}
