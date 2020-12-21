// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { CertificateHashDataDto } from './certificate-hash-data.dto'
import { GetCertificateIdUseEnum } from '../enums/get-certificate-id-use.enum'

export class CertificateHashDataChainDto {
  public constructor(
    certificateHashData: CertificateHashDataDto,
    certificateType: GetCertificateIdUseEnum
  ) {
    this.certificateHashData = certificateHashData
    this.certificateType = certificateType
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public certificateHashData: CertificateHashDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(GetCertificateIdUseEnum)
  public certificateType: GetCertificateIdUseEnum

  @ApiProperty()
  @IsOptional()
  public childCertificateHashData!: any
}
