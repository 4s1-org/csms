// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsEnum, IsNotEmpty, IsOptional } from 'class-validator'
import { CertificateHashDataDto } from './certificate-hash-data.dto'
import { CertificateHashDataDto } from './certificate-hash-data.dto'
import { CustomDataDto } from './custom-data.dto'
import { GetCertificateIdUseEnum } from '../enums/get-certificate-id-use.enum'

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
  // MinItems: 1
  // MinItems: 4
  @IsArray()
  public childCertificateHashData!: CertificateHashDataDto[]
}
