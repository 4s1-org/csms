// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { OcspRequestDataDto } from '../datatypes/ocsp-request-data.dto'

export class GetCertificateStatusRequestDto extends RequestBaseDto {
  private _className: "GetCertificateStatusRequestDto" = "GetCertificateStatusRequestDto"

  public constructor(
    ocspRequestData: OcspRequestDataDto,
  ) {
    super()
    this.ocspRequestData = ocspRequestData
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => OcspRequestDataDto)
  public ocspRequestData: OcspRequestDataDto
}
