// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { InstallCertificateUseEnum } from '../enumerations/install-certificate-use.enum'

export class InstallCertificateRequestDto extends RequestBaseDto {
  public constructor(
    certificateType: InstallCertificateUseEnum,
    certificate: string,
  ) {
    super()
    this.certificateType = certificateType
    this.certificate = certificate
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(InstallCertificateUseEnum)
  public certificateType: InstallCertificateUseEnum

  /**
   * A PEM encoded X.509 certificate.
   */
  @IsNotEmpty()
  @MaxLength(5500)
  @IsString()
  public certificate: string
}
