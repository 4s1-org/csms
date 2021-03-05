// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CertificateSigningUseEnum } from '../enumerations/certificate-signing-use.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class SignCertificateRequestDto extends RequestBaseDto {
  private _className: "SignCertificateRequestDto" = "SignCertificateRequestDto"

  public constructor(
    csr: string,
  ) {
    super()
    this.csr = csr
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * The Charging Station SHALL send the public key in form of a Certificate Signing Request (CSR) as described in RFC 2986 [22] and then PEM encoded, using the <<signcertificaterequest,SignCertificateRequest>> message.
   */
  public csr: string

  public certificateType!: CertificateSigningUseEnum
}
