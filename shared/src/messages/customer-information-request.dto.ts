// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CertificateHashDataDto } from '../datatypes/certificate-hash-data.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { IdTokenDto } from '../datatypes/id-token.dto'

export class CustomerInformationRequestDto extends RequestBaseDto {
  public constructor(
    requestId: number,
    report: boolean,
    clear: boolean,
  ) {
    super()
    this.requestId = requestId
    this.report = report
    this.clear = clear
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @IsOptional()
  @ValidateNested()
  @Type(() => CertificateHashDataDto)
  public customerCertificate!: CertificateHashDataDto

  @IsOptional()
  @ValidateNested()
  @Type(() => IdTokenDto)
  public idToken!: IdTokenDto

  /**
   * The Id of the request.
   */
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  /**
   * Flag indicating whether the Charging Station should return NotifyCustomerInformationRequest messages containing information about the customer referred to.
   */
  @IsNotEmpty()
  @IsBoolean()
  public report: boolean

  /**
   * Flag indicating whether the Charging Station should clear all information about the customer referred to.
   */
  @IsNotEmpty()
  @IsBoolean()
  public clear: boolean

  /**
   * A (e.g. vendor specific) identifier of the customer this request refers to. This field contains a custom identifier other than IdToken and Certificate.
   * One of the possible identifiers (customerIdentifier, customerIdToken or customerCertificate) should be in the request message.
   */
  @IsOptional()
  @MaxLength(64)
  @IsString()
  public customerIdentifier!: string
}
