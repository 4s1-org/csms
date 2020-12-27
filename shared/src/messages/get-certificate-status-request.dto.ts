// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../types/custom-data.dto'
import { OCSPRequestDataDto } from '../types/ocsp-request-data.dto'

export class GetCertificateStatusRequestDto {
  public constructor(
    ocspRequestData: OCSPRequestDataDto,
  ) {
    this.ocspRequestData = ocspRequestData
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  public ocspRequestData: OCSPRequestDataDto
}
