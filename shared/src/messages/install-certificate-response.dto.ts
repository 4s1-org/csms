// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { InstallCertificateStatusEnum } from '../enumerations/install-certificate-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class InstallCertificateResponseDto implements IResponseMessage {
  public constructor(
    status: InstallCertificateStatusEnum,
  ) {
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(InstallCertificateStatusEnum)
  public status: InstallCertificateStatusEnum

  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
