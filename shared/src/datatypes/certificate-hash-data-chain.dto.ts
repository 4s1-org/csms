// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMaxSize, ArrayMinSize, ArrayNotEmpty, IsArray, IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CertificateHashDataDto } from './certificate-hash-data.dto'
import { CustomDataDto } from './custom-data.dto'
import { GetCertificateIdUseEnum } from '../enumerations/get-certificate-id-use.enum'

export class CertificateHashDataChainDto {
  public constructor(
    certificateHashData: CertificateHashDataDto,
    certificateType: GetCertificateIdUseEnum,
  ) {
    this.certificateHashData = certificateHashData
    this.certificateType = certificateType
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ValidateNested()
  public certificateHashData: CertificateHashDataDto

  @IsNotEmpty()
  @IsEnum(GetCertificateIdUseEnum)
  public certificateType: GetCertificateIdUseEnum

  @IsOptional()
  @ArrayMinSize(1)
  @ArrayMaxSize(4)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public childCertificateHashData!: CertificateHashDataDto[]
}
