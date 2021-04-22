// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { InstallCertificateStatusEnum } from '../enumerations/install-certificate-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class InstallCertificateResponseDto extends ResponseBaseDto {
  @Exclude()
  private _className: 'InstallCertificateResponseDto' = 'InstallCertificateResponseDto'

  public constructor(
    status: InstallCertificateStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: InstallCertificateStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
