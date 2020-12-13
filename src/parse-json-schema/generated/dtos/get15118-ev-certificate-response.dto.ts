// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsString, IsEnum, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { Iso15118EVCertificateStatusEnum } from '../enums/iso15118-ev-certificate-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class Get15118EVCertificateResponseDto {
  public constructor () {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(Iso15118EVCertificateStatusEnum)
  public status!: Iso15118EVCertificateStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto

  /**
   * Raw CertificateInstallationRes response for the EV, Base64 encoded.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 5600)
  @IsString()
  public exiResponse!: string
}
