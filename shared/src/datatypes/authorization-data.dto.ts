// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
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

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @Type(() => IdTokenDto)
  @ValidateNested()
  public idToken: IdTokenDto

  @IsOptional()
  @Type(() => IdTokenInfoDto)
  @ValidateNested()
  public idTokenInfo!: IdTokenInfoDto
}
