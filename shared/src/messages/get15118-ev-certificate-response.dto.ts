// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { Iso15118EvCertificateStatusEnum } from '../enumerations/iso15118-ev-certificate-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class Get15118EvCertificateResponseDto implements IResponseMessage {
  public constructor(
    status: Iso15118EvCertificateStatusEnum,
    exiResponse: string,
  ) {
    this.status = status
    this.exiResponse = exiResponse
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(Iso15118EvCertificateStatusEnum)
  public status: Iso15118EvCertificateStatusEnum

  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto

  /**
   * Raw CertificateInstallationRes response for the EV, Base64 encoded.
   */
  @IsNotEmpty()
  @MaxLength(5600)
  @IsString()
  public exiResponse: string
}
