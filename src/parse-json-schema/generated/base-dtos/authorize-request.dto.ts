// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../dtos/custom-data.dto'
import { IdTokenDto } from '../dtos/id-token.dto'
import { OCSPRequestDataDto } from '../dtos/ocsp-request-data.dto'

export class AuthorizeRequestDto {
  public constructor(
    idToken: IdTokenDto,
  ) {
    this.idToken = idToken
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  public idToken: IdTokenDto

  /**
   * The X.509 certificated presented by EV and encoded in PEM format.
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(5500)
  @IsString()
  public certificate!: string

  @ApiProperty()
  @IsOptional()
  // MinItems: 1
  // MinItems: 4
  @IsArray()
  @ValidateNested()
  public iso15118CertificateHashData!: OCSPRequestDataDto[]
}
