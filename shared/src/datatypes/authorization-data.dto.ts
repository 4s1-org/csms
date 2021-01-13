// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { IdTokenDto } from './id-token.dto'
import { IdTokenInfoDto } from './id-token-info.dto'

/**
 * Contains the identifier to use for authorization.
 */
export class AuthorizationDataDto {
  public constructor(
    idToken: IdTokenDto,
  ) {
    this.idToken = idToken
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ValidateNested()
  public idToken: IdTokenDto

  @IsOptional()
  @ValidateNested()
  public idTokenInfo!: IdTokenInfoDto
}
