// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'
import { CertificateActionEnum } from '../enums/certificate-action.enum'
import { CustomDataDto } from './custom-data.dto'

export class Get15118EVCertificateRequestDto {
  public constructor(
    iso15118SchemaVersion: string,
    action: CertificateActionEnum,
    exiRequest: string,
  ) {
    this.iso15118SchemaVersion = iso15118SchemaVersion
    this.action = action
    this.exiRequest = exiRequest
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Schema version currently used for the 15118 session between EV and Charging Station. Needed for parsing of the EXI stream by the CSMS.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 50)
  public iso15118SchemaVersion: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(CertificateActionEnum)
  public action: CertificateActionEnum

  /**
   * Raw CertificateInstallationReq request from EV, Base64 encoded.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 5600)
  public exiRequest: string
}
