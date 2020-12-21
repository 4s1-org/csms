// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
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
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(GetInstalledCertificateStatusEnum)
  public status: GetInstalledCertificateStatusEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto

  @ApiProperty()
  @IsOptional()
  // MinItems: 1
  @IsArray()
  @ValidateNested()
  public certificateHashDataChain!: CertificateHashDataChainDto[]
}
