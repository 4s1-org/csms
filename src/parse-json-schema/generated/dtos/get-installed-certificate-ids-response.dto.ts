// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { GetInstalledCertificateStatusEnum } from '../enums/get-installed-certificate-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class GetInstalledCertificateIdsResponseDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public status: GetInstalledCertificateStatusEnum

  @IsOptional()
  @ApiProperty()
  public statusInfo: StatusInfoDto

  @IsOptional()
  @ApiProperty()
  public certificateHashDataChain: any
}
