// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { DeleteCertificateStatusEnum } from '../enums/delete-certificate-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class DeleteCertificateResponseDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public status: DeleteCertificateStatusEnum

  @IsOptional()
  @ApiProperty()
  public statusInfo: StatusInfoDto
}
