// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { CertificateHashDataDto } from './certificate-hash-data.dto'
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
  @IsString()
  @Length(0, 64)
  public customerIdentifier!: string
}
