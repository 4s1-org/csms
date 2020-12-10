// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { Iso15118EVCertificateStatusEnum } from '../enums/iso15118-ev-certificate-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class Get15118EVCertificateResponseDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public status: Iso15118EVCertificateStatusEnum

  @IsOptional()
  @ApiProperty()
  public statusInfo: StatusInfoDto

  /**
   * Raw CertificateInstallationRes response for the EV, Base64 encoded.
   */
  @Length(0, 5600)
  @ApiProperty()
  public exiResponse: string
}
