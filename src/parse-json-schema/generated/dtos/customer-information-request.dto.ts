// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsString, IsBoolean, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { CertificateHashDataDto } from './certificate-hash-data.dto'
import { IdTokenDto } from './id-token.dto'

export class CustomerInformationRequestDto {
  public constructor (
    requestId: number
  ) {
    this.requestId = requestId
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  public customerCertificate!: CertificateHashDataDto

  @ApiProperty()
  @IsOptional()
  public idToken!: IdTokenDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId!: number

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  public report!: boolean

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  public clear!: boolean

  /**
   * A (e.g. vendor specific) identifier of the customer this request refers to. This field contains a custom identifier other than IdToken and Certificate.
One of the possible identifiers (customerIdentifier, customerIdToken or customerCertificate) should be in the request message.
   */
  @ApiProperty()
  @IsOptional()
  @Length(0, 64)
  @IsString()
  public customerIdentifier!: string
}
