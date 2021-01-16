// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
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
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @Type(() => OcspRequestDataDto)
  @ValidateNested()
  public ocspRequestData: OcspRequestDataDto
}
