// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { IdTokenDto } from './id-token.dto'

export class AuthorizeRequestDto {
  public constructor(
    idToken: IdTokenDto,
  ) {
    this.idToken = idToken
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public idToken: IdTokenDto

  /**
   * The X.509 certificated presented by EV and encoded in PEM format.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 5500)
  public certificate!: string

  @ApiProperty()
  @IsOptional()
  public iso15118CertificateHashData!: any
}
