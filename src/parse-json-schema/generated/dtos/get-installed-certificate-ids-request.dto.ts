// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsArray, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { GetCertificateIdUseEnum } from '../enums/get-certificate-id-use.enum'

export class GetInstalledCertificateIdsRequestDto {

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Indicates the type of certificates requested. When omitted, all certificate types are requested.
   */
  @ApiProperty()
  @IsOptional()
  @IsArray()
  public certificateType!: GetCertificateIdUseEnum[]
}
