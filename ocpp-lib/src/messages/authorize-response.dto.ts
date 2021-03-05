// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { AuthorizeCertificateStatusEnum } from '../enumerations/authorize-certificate-status.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { IdTokenInfoDto } from '../datatypes/id-token-info.dto'

export class AuthorizeResponseDto extends ResponseBaseDto {
  @Exclude()
  private _className: "AuthorizeResponseDto" = "AuthorizeResponseDto"

  public constructor(
    idTokenInfo: IdTokenInfoDto,
  ) {
    super()
    this.idTokenInfo = idTokenInfo
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => IdTokenInfoDto)
  public idTokenInfo: IdTokenInfoDto

  public certificateStatus!: AuthorizeCertificateStatusEnum
}
