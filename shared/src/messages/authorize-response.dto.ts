// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { AuthorizeCertificateStatusEnum } from '../enumerations/authorize-certificate-status.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { IdTokenInfoDto } from '../datatypes/id-token-info.dto'

export class AuthorizeResponseDto extends ResponseBaseDto {
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
