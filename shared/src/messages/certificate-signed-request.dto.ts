// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CertificateSigningUseEnum } from '../enumerations/certificate-signing-use.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class CertificateSignedRequestDto implements IRequestMessage {
  public constructor(
    certificateChain: string,
  ) {
    this.certificateChain = certificateChain
  }

  @IsOptional()
  @ValidateNested()
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
