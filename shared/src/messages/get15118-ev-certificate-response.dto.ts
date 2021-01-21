// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { Iso15118EvCertificateStatusEnum } from '../enumerations/iso15118-ev-certificate-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class Get15118EvCertificateResponseDto extends ResponseBaseDto {
  public constructor(
    status: Iso15118EvCertificateStatusEnum,
    exiResponse: string,
  ) {
    super()
    this.status = status
    this.exiResponse = exiResponse
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: Iso15118EvCertificateStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto

  /**
   * Raw CertificateInstallationRes response for the EV, Base64 encoded.
   */
  public exiResponse: string
}
