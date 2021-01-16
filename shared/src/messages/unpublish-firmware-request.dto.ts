// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class UnpublishFirmwareRequestDto extends RequestBaseDto {
  public constructor(
    checksum: string,
  ) {
    super()
    this.checksum = checksum
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * The MD5 checksum over the entire firmware file as a hexadecimal string of length 32.
   */
  @IsNotEmpty()
  @MaxLength(32)
  @IsString()
  public checksum: string
}
