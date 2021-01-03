// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CertificateHashDataChainDto } from '../datatypes/certificate-hash-data-chain.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GetInstalledCertificateStatusEnum } from '../enumerations/get-installed-certificate-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class GetInstalledCertificateIdsResponseDto implements IResponseMessage {
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
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public certificateHashDataChain!: CertificateHashDataChainDto[]
}
