// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsString, IsEnum, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { CertificateSigningUseEnum } from '../enums/certificate-signing-use.enum'

export class SignCertificateRequestDto {
  public constructor(
    csr: string
  ) {
    this.csr = csr
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * The Charging Station SHALL send the public key in form of a Certificate Signing Request (CSR) as described in RFC 2986 [22] and then PEM encoded, using the <<signcertificaterequest,SignCertificateRequest>> message.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 5500)
  @IsString()
  public csr: string

  @ApiProperty()
  @IsOptional()
  @IsEnum(CertificateSigningUseEnum)
  public certificateType!: CertificateSigningUseEnum
}
