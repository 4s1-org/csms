// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { InstallCertificateStatusEnum } from '../enums/install-certificate-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class InstallCertificateResponseDto {
  public constructor (
    status: InstallCertificateStatusEnum
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(InstallCertificateStatusEnum)
  public status: InstallCertificateStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto
}
