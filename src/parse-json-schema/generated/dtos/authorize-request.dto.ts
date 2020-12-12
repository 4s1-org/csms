// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { IdTokenDto } from './id-token.dto'

export class AuthorizeRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public idToken!: IdTokenDto

  /**
   * The X.509 certificated presented by EV and encoded in PEM format.
   */
  @IsOptional()
  @Length(0, 5500)
  @ApiProperty()
  public certificate!: string

  @IsOptional()
  @ApiProperty()
  public iso15118CertificateHashData!: any
}
