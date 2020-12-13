// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { InstallCertificateUseEnum } from '../enums/install-certificate-use.enum'

export class InstallCertificateRequestDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public certificateType!: InstallCertificateUseEnum

  /**
   * A PEM encoded X.509 certificate.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 5500)
  @IsString()
  public certificate!: string
}
