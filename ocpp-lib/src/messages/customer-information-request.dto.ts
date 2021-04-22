// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CertificateHashDataDto } from '../datatypes/certificate-hash-data.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { IdTokenDto } from '../datatypes/id-token.dto'

export class CustomerInformationRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: 'CustomerInformationRequestDto' = 'CustomerInformationRequestDto'

  public constructor(
    requestId: number,
    report: boolean,
    clear: boolean,
  ) {
    super()
    this.requestId = requestId
    this.report = report
    this.clear = clear
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => CertificateHashDataDto)
  public customerCertificate!: CertificateHashDataDto

  @Type(() => IdTokenDto)
  public idToken!: IdTokenDto

  /**
   * The Id of the request.
   */
  public requestId: number

  /**
   * Flag indicating whether the Charging Station should return NotifyCustomerInformationRequest messages containing information about the customer referred to.
   */
  public report: boolean

  /**
   * Flag indicating whether the Charging Station should clear all information about the customer referred to.
   */
  public clear: boolean

  /**
   * A (e.g. vendor specific) identifier of the customer this request refers to. This field contains a custom identifier other than IdToken and Certificate.
   * One of the possible identifiers (customerIdentifier, customerIdToken or customerCertificate) should be in the request message.
   */
  public customerIdentifier!: string
}
