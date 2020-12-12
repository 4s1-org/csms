// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { CertificateHashDataDto } from './certificate-hash-data.dto'
import { IdTokenDto } from './id-token.dto'

export class CustomerInformationRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public customerCertificate!: CertificateHashDataDto

  @IsOptional()
  @ApiProperty()
  public idToken!: IdTokenDto

  @IsNotEmpty()
  @ApiProperty()
  public requestId!: number

  @IsNotEmpty()
  @ApiProperty()
  public report!: boolean

  @IsNotEmpty()
  @ApiProperty()
  public clear!: boolean

  /**
   * A (e.g. vendor specific) identifier of the customer this request refers to. This field contains a custom identifier other than IdToken and Certificate.
One of the possible identifiers (customerIdentifier, customerIdToken or customerCertificate) should be in the request message.
   */
  @IsOptional()
  @Length(0, 64)
  @ApiProperty()
  public customerIdentifier!: string
}
