// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { OcspRequestDataDto } from '../datatypes/ocsp-request-data.dto'

export class GetCertificateStatusRequestDto {
  public constructor(
    ocspRequestData: OcspRequestDataDto,
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
  public ocspRequestData: OcspRequestDataDto
}
