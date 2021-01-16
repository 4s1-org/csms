// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CertificateActionEnum } from '../enumerations/certificate-action.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class Get15118EvCertificateRequestDto extends RequestBaseDto {
  public constructor(
    iso15118SchemaVersion: string,
    action: CertificateActionEnum,
    exiRequest: string,
  ) {
    super()
    this.iso15118SchemaVersion = iso15118SchemaVersion
    this.action = action
    this.exiRequest = exiRequest
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Schema version currently used for the 15118 session between EV and Charging Station. Needed for parsing of the EXI stream by the CSMS.
   */
  @IsNotEmpty()
  @MaxLength(50)
  @IsString()
  public iso15118SchemaVersion: string

  @IsNotEmpty()
  @IsEnum(CertificateActionEnum)
  public action: CertificateActionEnum

  /**
   * Raw CertificateInstallationReq request from EV, Base64 encoded.
   */
  @IsNotEmpty()
  @MaxLength(5600)
  @IsString()
  public exiRequest: string
}
