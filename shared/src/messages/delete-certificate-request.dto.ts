// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CertificateHashDataDto } from '../datatypes/certificate-hash-data.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class DeleteCertificateRequestDto implements IRequestMessage {
  public constructor(
    certificateHashData: CertificateHashDataDto,
  ) {
    this.certificateHashData = certificateHashData
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  public certificateHashData: CertificateHashDataDto
}
