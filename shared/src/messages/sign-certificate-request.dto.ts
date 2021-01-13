// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CertificateSigningUseEnum } from '../enumerations/certificate-signing-use.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class SignCertificateRequestDto implements IRequestMessage {
  public constructor(
    csr: string,
  ) {
    this.csr = csr
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * The Charging Station SHALL send the public key in form of a Certificate Signing Request (CSR) as described in RFC 2986 [22] and then PEM encoded, using the <<signcertificaterequest,SignCertificateRequest>> message.
   */
  @IsNotEmpty()
  @MaxLength(5500)
  @IsString()
  public csr: string

  @IsOptional()
  @IsEnum(CertificateSigningUseEnum)
  public certificateType!: CertificateSigningUseEnum
}
