// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CertificateHashDataDto } from '../datatypes/certificate-hash-data.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class DeleteCertificateRequestDto extends RequestBaseDto {
  public constructor(
    certificateHashData: CertificateHashDataDto,
  ) {
    super()
    this.certificateHashData = certificateHashData
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @Type(() => CertificateHashDataDto)
  @ValidateNested()
  public certificateHashData: CertificateHashDataDto
}
