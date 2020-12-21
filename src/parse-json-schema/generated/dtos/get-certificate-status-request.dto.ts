// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { OCSPRequestDataDto } from './ocsp-request-data.dto'

export class GetCertificateStatusRequestDto {
  public constructor(
    ocspRequestData: OCSPRequestDataDto,
  ) {
    this.ocspRequestData = ocspRequestData
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public ocspRequestData: OCSPRequestDataDto
}
