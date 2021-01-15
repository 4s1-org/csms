// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { OcspRequestDataDto } from '../datatypes/ocsp-request-data.dto'

export class GetCertificateStatusRequestDto extends RequestBaseDto {
  public constructor(
    ocspRequestData: OcspRequestDataDto,
  ) {
    super()
    this.ocspRequestData = ocspRequestData
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ValidateNested()
  public ocspRequestData: OcspRequestDataDto
}
