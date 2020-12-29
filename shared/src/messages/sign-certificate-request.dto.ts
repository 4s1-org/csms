// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { CertificateSigningUseEnum } from '../enumerations/certificate-signing-use.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class SignCertificateRequestDto {
  public constructor(
    csr: string,
  ) {
    this.csr = csr
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * The Charging Station SHALL send the public key in form of a Certificate Signing Request (CSR) as described in RFC 2986 [22] and then PEM encoded, using the <<signcertificaterequest,SignCertificateRequest>> message.
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(5500)
  @IsString()
  public csr: string

  @ApiProperty()
  @IsOptional()
  @IsEnum(CertificateSigningUseEnum)
  public certificateType!: CertificateSigningUseEnum
}
