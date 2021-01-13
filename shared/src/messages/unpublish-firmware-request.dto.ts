// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class UnpublishFirmwareRequestDto implements IRequestMessage {
  public constructor(
    checksum: string,
  ) {
    this.checksum = checksum
  }

  @IsOptional()
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
