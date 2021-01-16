// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CertificateSigningUseEnum } from '../enumerations/certificate-signing-use.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class CertificateSignedRequestDto extends RequestBaseDto {
  public constructor(
    certificateChain: string,
  ) {
    super()
    this.certificateChain = certificateChain
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * The signed PEM encoded X.509 certificate. This can also contain the necessary sub CA certificates. In that case, the order of the bundle should follow the certificate chain, starting from the leaf certificate.
   * 
   * The Configuration Variable <<configkey-max-certificate-chain-size,MaxCertificateChainSize>> can be used to limit the maximum size of this field.
   */
  @IsNotEmpty()
  @MaxLength(10000)
  @IsString()
  public certificateChain: string

  @IsOptional()
  @IsEnum(CertificateSigningUseEnum)
  public certificateType!: CertificateSigningUseEnum
}
