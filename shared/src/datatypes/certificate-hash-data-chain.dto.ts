// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CertificateHashDataDto } from './certificate-hash-data.dto'
import { CustomDataDto } from './custom-data.dto'
import { GetCertificateIdUseEnum } from '../enumerations/get-certificate-id-use.enum'

export class CertificateHashDataChainDto extends DatatypeBaseDto {
  public constructor(
    certificateHashData: CertificateHashDataDto,
    certificateType: GetCertificateIdUseEnum,
  ) {
    super()
    this.certificateHashData = certificateHashData
    this.certificateType = certificateType
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => CertificateHashDataDto)
  public certificateHashData: CertificateHashDataDto

  public certificateType: GetCertificateIdUseEnum

  @Type(() => CertificateHashDataDto)
  public childCertificateHashData!: CertificateHashDataDto[]
}
