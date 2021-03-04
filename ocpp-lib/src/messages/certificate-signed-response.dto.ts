// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CertificateSignedStatusEnum } from '../enumerations/certificate-signed-status.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class CertificateSignedResponseDto extends ResponseBaseDto {
  private _className: "CertificateSignedResponseDto" = "CertificateSignedResponseDto"

  public constructor(
    status: CertificateSignedStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: CertificateSignedStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
