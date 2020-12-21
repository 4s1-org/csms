// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../dtos/custom-data.dto'
import { InstallCertificateUseEnum } from '../enums/install-certificate-use.enum'

export class InstallCertificateRequestDto {
  public constructor(
    certificateType: InstallCertificateUseEnum,
    certificate: string,
  ) {
    this.certificateType = certificateType
    this.certificate = certificate
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(InstallCertificateUseEnum)
  public certificateType: InstallCertificateUseEnum

  /**
   * A PEM encoded X.509 certificate.
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(5500)
  @IsString()
  public certificate: string
}
