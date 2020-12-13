// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { CertificateHashDataDto } from './certificate-hash-data.dto'

export class DeleteCertificateRequestDto {
  public constructor (
    certificateHashData: CertificateHashDataDto
  ) {
    this.certificateHashData = certificateHashData
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public certificateHashData: CertificateHashDataDto
}
