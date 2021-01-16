// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMaxSize, ArrayMinSize, ArrayNotEmpty, IsArray, IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CertificateHashDataDto } from './certificate-hash-data.dto'
import { CustomDataDto } from './custom-data.dto'
import { GetCertificateIdUseEnum } from '../enumerations/get-certificate-id-use.enum'

export class CertificateHashDataChainDto extends DatatypeBaseDto {
  public constructor(
    certificateHashData: CertificateHashDataDto,
    certificateType: GetCertificateIdUseEnum,
  ) {
    super()
    this.certificateHashData = certificateHashData
    this.certificateType = certificateType
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @Type(() => CertificateHashDataDto)
  @ValidateNested()
  public certificateHashData: CertificateHashDataDto

  @IsNotEmpty()
  @IsEnum(GetCertificateIdUseEnum)
  public certificateType: GetCertificateIdUseEnum

  @IsOptional()
  @ArrayMinSize(1)
  @ArrayMaxSize(4)
  @Type(() => CertificateHashDataDto)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public childCertificateHashData!: CertificateHashDataDto[]
}
