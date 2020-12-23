// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { CertificateActionEnum } from '../enumerations/certificate-action.enum'
import { CustomDataDto } from '../types/custom-data.dto'

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
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Schema version currently used for the 15118 session between EV and Charging Station. Needed for parsing of the EXI stream by the CSMS.
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(50)
  @IsString()
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
  @MaxLength(5600)
  @IsString()
  public exiRequest: string
}
