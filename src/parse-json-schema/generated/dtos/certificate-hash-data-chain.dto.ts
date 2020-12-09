// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { CertificateHashDataDto } from './certificate-hash-data.dto'
import { GetCertificateIdUseEnum } from '../enums/get-certificate-id-use.enum'

export class CertificateHashDataChainDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public certificateHashData: CertificateHashDataDto

  @ApiProperty()
  public certificateType: GetCertificateIdUseEnum

  @IsOptional()
  @ApiProperty()
  public childCertificateHashData: any
}
