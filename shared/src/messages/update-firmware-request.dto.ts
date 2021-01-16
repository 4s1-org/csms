// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { FirmwareDto } from '../datatypes/firmware.dto'

export class UpdateFirmwareRequestDto extends RequestBaseDto {
  public constructor(
    requestId: number,
    firmware: FirmwareDto,
  ) {
    super()
    this.requestId = requestId
    this.firmware = firmware
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * This specifies how many times Charging Station must try to download the firmware before giving up. If this field is not present, it is left to Charging Station to decide how many times it wants to retry.
   */
  @IsOptional()
  @IsInt()
  public retries!: number

  /**
   * The interval in seconds after which a retry may be attempted. If this field is not present, it is left to Charging Station to decide how long to wait between attempts.
   */
  @IsOptional()
  @IsInt()
  public retryInterval!: number

  /**
   * The Id of this request
   */
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => FirmwareDto)
  public firmware: FirmwareDto
}
