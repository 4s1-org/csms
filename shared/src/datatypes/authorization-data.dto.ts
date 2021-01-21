// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'
import { IdTokenDto } from './id-token.dto'
import { IdTokenInfoDto } from './id-token-info.dto'

/**
 * Contains the identifier to use for authorization.
 */
export class AuthorizationDataDto extends DatatypeBaseDto {
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

  @Type(() => IdTokenInfoDto)
  public idTokenInfo!: IdTokenInfoDto
}
