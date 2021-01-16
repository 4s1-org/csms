// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
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
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(GetInstalledCertificateStatusEnum)
  public status: GetInstalledCertificateStatusEnum

  @IsOptional()
  @Type(() => StatusInfoDto)
  @ValidateNested()
  public statusInfo!: StatusInfoDto

  @IsOptional()
  @ArrayMinSize(1)
  @Type(() => CertificateHashDataChainDto)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public certificateHashDataChain!: CertificateHashDataChainDto[]
}
