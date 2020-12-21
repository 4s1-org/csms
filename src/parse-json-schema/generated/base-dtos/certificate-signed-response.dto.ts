// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CertificateSignedStatusEnum } from '../enums/certificate-signed-status.enum'
import { CustomDataDto } from '../dtos/custom-data.dto'
import { StatusInfoDto } from '../dtos/status-info.dto'

export class CertificateSignedResponseDto {
  public constructor(
    status: CertificateSignedStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(CertificateSignedStatusEnum)
  public status: CertificateSignedStatusEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
