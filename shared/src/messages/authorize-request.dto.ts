// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMaxSize, ArrayMinSize, ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
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
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => IdTokenDto)
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
  @Type(() => OcspRequestDataDto)
  public iso15118CertificateHashData!: OcspRequestDataDto[]
}
