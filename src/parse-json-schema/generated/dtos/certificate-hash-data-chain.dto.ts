// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsArray, IsEnum, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { CertificateHashDataDto } from './certificate-hash-data.dto'
import { GetCertificateIdUseEnum } from '../enums/get-certificate-id-use.enum'
import { CertificateHashDataDto } from './certificate-hash-data.dto'

export class CertificateHashDataChainDto {
  public constructor(
    certificateHashData: CertificateHashDataDto,
    certificateType: GetCertificateIdUseEnum,
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
  @IsArray()
  public childCertificateHashData!: CertificateHashDataDto[]
}
