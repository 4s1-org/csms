// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsString, IsEnum, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { CertificateActionEnum } from '../enums/certificate-action.enum'

export class Get15118EVCertificateRequestDto {
  public constructor () {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Schema version currently used for the 15118 session between EV and Charging Station. Needed for parsing of the EXI stream by the CSMS.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 50)
  @IsString()
  public iso15118SchemaVersion!: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(CertificateActionEnum)
  public action!: CertificateActionEnum

  /**
   * Raw CertificateInstallationReq request from EV, Base64 encoded.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 5600)
  @IsString()
  public exiRequest!: string
}
