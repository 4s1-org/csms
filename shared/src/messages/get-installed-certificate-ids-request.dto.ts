// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GetCertificateIdUseEnum } from '../enumerations/get-certificate-id-use.enum'

export class GetInstalledCertificateIdsRequestDto implements IRequestMessage {
  public constructor() {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Indicates the type of certificates requested. When omitted, all certificate types are requested.
   */
  @ApiProperty()
  @IsOptional()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public certificateType!: GetCertificateIdUseEnum[]
}
