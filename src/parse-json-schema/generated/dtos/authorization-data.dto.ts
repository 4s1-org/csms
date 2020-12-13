// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { IdTokenDto } from './id-token.dto'
import { IdTokenInfoDto } from './id-token-info.dto'

/**
 * Contains the identifier to use for authorization.
 */
export class AuthorizationDataDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public idToken!: IdTokenDto

  @ApiProperty()
  @IsOptional()
  public idTokenInfo!: IdTokenInfoDto
}
