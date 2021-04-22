// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { IdTokenDto } from '../datatypes/id-token.dto'
import { OcspRequestDataDto } from '../datatypes/ocsp-request-data.dto'

export class AuthorizeRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: 'AuthorizeRequestDto' = 'AuthorizeRequestDto'

  public constructor(
    idToken: IdTokenDto,
  ) {
    super()
    this.idToken = idToken
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => IdTokenDto)
  public idToken: IdTokenDto

  /**
   * The X.509 certificated presented by EV and encoded in PEM format.
   */
  public certificate!: string

  @Type(() => OcspRequestDataDto)
  public iso15118CertificateHashData!: OcspRequestDataDto[]
}
