// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { CertificateSigningUseEnum } from '../enums/certificate-signing-use.enum'
import { CustomDataDto } from './custom-data.dto'

export class CertificateSignedRequestDto {
  public constructor(
    certificateChain: string,
  ) {
    this.certificateChain = certificateChain
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * The signed PEM encoded X.509 certificate. This can also contain the necessary sub CA certificates. In that case, the order of the bundle should follow the certificate chain, starting from the leaf certificate.
   * 
   * The Configuration Variable <<configkey-max-certificate-chain-size,MaxCertificateChainSize>> can be used to limit the maximum size of this field.
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(10000)
  @IsString()
  public certificateChain: string

  @ApiProperty()
  @IsOptional()
  @IsEnum(CertificateSigningUseEnum)
  public certificateType!: CertificateSigningUseEnum
}
