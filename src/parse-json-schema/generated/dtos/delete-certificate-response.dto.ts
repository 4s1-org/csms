// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { DeleteCertificateStatusEnum } from '../enums/delete-certificate-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class DeleteCertificateResponseDto {
  public constructor(
    status: DeleteCertificateStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(DeleteCertificateStatusEnum)
  public status: DeleteCertificateStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto
}
