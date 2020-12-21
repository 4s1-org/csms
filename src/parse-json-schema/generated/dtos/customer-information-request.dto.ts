// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { CertificateHashDataDto } from './certificate-hash-data.dto'
import { CustomDataDto } from './custom-data.dto'
import { IdTokenDto } from './id-token.dto'

export class CustomerInformationRequestDto {
  public constructor(
    requestId: number,
    report: boolean,
    clear: boolean,
  ) {
    this.requestId = requestId
    this.report = report
    this.clear = clear
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

  /**
   * The Id of the request.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  /**
   * Flag indicating whether the Charging Station should return NotifyCustomerInformationRequest messages containing information about the customer referred to.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  public report: boolean

  /**
   * Flag indicating whether the Charging Station should clear all information about the customer referred to.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  public clear: boolean

  /**
   * A (e.g. vendor specific) identifier of the customer this request refers to. This field contains a custom identifier other than IdToken and Certificate.
   * One of the possible identifiers (customerIdentifier, customerIdToken or customerCertificate) should be in the request message.
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(64)
  @IsString()
  public customerIdentifier!: string
}
