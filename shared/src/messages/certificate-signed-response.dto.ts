// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CertificateSignedStatusEnum } from '../enumerations/certificate-signed-status.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class CertificateSignedResponseDto extends ResponseBaseDto {
  public constructor(
    status: CertificateSignedStatusEnum,
  ) {
    super()
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(CertificateSignedStatusEnum)
  public status: CertificateSignedStatusEnum

  @IsOptional()
  @ValidateNested()
  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
