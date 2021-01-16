// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMaxSize, ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { IdTokenDto } from '../datatypes/id-token.dto'
import { OcspRequestDataDto } from '../datatypes/ocsp-request-data.dto'

export class AuthorizeRequestDto extends RequestBaseDto {
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
  @Type(() => OcspRequestDataDto)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public iso15118CertificateHashData!: OcspRequestDataDto[]
}
