// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { InstallCertificateUseEnum } from '../enums/install-certificate-use.enum'

export class InstallCertificateRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public certificateType!: InstallCertificateUseEnum

  /**
   * A PEM encoded X.509 certificate.
   */
  @IsNotEmpty()
  @Length(0, 5500)
  @ApiProperty()
  public certificate!: string
}
