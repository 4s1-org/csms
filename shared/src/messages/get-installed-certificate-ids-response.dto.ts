// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CertificateHashDataChainDto } from '../datatypes/certificate-hash-data-chain.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GetInstalledCertificateStatusEnum } from '../enumerations/get-installed-certificate-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class GetInstalledCertificateIdsResponseDto extends ResponseBaseDto {
  public constructor(
    status: GetInstalledCertificateStatusEnum,
  ) {
    super()
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(GetInstalledCertificateStatusEnum)
  public status: GetInstalledCertificateStatusEnum

  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto

  @IsOptional()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public certificateHashDataChain!: CertificateHashDataChainDto[]
}
