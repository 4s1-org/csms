// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMaxSize, ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { IdTokenDto } from '../datatypes/id-token.dto'
import { OcspRequestDataDto } from '../datatypes/ocsp-request-data.dto'

export class AuthorizeRequestDto implements IRequestMessage {
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

  /**
   * The X.509 certificated presented by EV and encoded in PEM format.
   */
  @IsOptional()
  @MaxLength(5500)
  @IsString()
  public certificate!: string

  @IsOptional()
  @ArrayMinSize(1)
  @ArrayMaxSize(4)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public iso15118CertificateHashData!: OcspRequestDataDto[]
}
