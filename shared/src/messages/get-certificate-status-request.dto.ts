// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { OcspRequestDataDto } from '../datatypes/ocsp-request-data.dto'

export class GetCertificateStatusRequestDto implements IRequestMessage {
  public constructor(
    ocspRequestData: OcspRequestDataDto,
  ) {
    this.ocspRequestData = ocspRequestData
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ValidateNested()
  public ocspRequestData: OcspRequestDataDto
}
