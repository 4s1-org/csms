// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { CertificateActionEnum } from '../enums/certificate-action.enum'

export class Get15118EVCertificateRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  /**
   * Schema version currently used for the 15118 session between EV and Charging Station. Needed for parsing of the EXI stream by the CSMS.
   */
  @Length(0, 50)
  @ApiProperty()
  public iso15118SchemaVersion: string

  @ApiProperty()
  public action: CertificateActionEnum

  /**
   * Raw CertificateInstallationReq request from EV, Base64 encoded.
   */
  @Length(0, 5600)
  @ApiProperty()
  public exiRequest: string
}
