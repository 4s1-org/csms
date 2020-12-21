// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsEnum, IsNotEmpty, IsOptional } from 'class-validator'
import { CertificateHashDataChainDto } from './certificate-hash-data-chain.dto'
import { CustomDataDto } from './custom-data.dto'
import { GetInstalledCertificateStatusEnum } from '../enums/get-installed-certificate-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class GetInstalledCertificateIdsResponseDto {
  public constructor(
    status: GetInstalledCertificateStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(GetInstalledCertificateStatusEnum)
  public status: GetInstalledCertificateStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto

  @ApiProperty()
  @IsOptional()
  // MinItems: 1
  @IsArray()
  public certificateHashDataChain!: CertificateHashDataChainDto[]
}
