// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { InstallCertificateStatusEnum } from '../enumerations/install-certificate-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class InstallCertificateResponseDto extends ResponseBaseDto {
  public constructor(
    status: InstallCertificateStatusEnum,
  ) {
    super()
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
