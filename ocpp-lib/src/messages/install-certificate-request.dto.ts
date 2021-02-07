// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { InstallCertificateUseEnum } from '../enumerations/install-certificate-use.enum'

export class InstallCertificateRequestDto extends RequestBaseDto {
  public constructor(
    certificateType: InstallCertificateUseEnum,
    certificate: string,
  ) {
    super()
    this.certificateType = certificateType
    this.certificate = certificate
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public certificateType: InstallCertificateUseEnum

  /**
   * A PEM encoded X.509 certificate.
   */
  public certificate: string
}