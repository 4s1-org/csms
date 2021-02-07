// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CertificateHashDataDto } from '../datatypes/certificate-hash-data.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class DeleteCertificateRequestDto extends RequestBaseDto {
  public constructor(
    certificateHashData: CertificateHashDataDto,
  ) {
    super()
    this.certificateHashData = certificateHashData
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => CertificateHashDataDto)
  public certificateHashData: CertificateHashDataDto
}
