// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CertificateHashDataChainDto } from '../datatypes/certificate-hash-data-chain.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GetInstalledCertificateStatusEnum } from '../enumerations/get-installed-certificate-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class GetInstalledCertificateIdsResponseDto extends ResponseBaseDto {
  public constructor(
    status: GetInstalledCertificateStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: GetInstalledCertificateStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto

  @Type(() => CertificateHashDataChainDto)
  public certificateHashDataChain!: CertificateHashDataChainDto[]
}
