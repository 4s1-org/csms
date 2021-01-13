// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { DeleteCertificateStatusEnum } from '../enumerations/delete-certificate-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class DeleteCertificateResponseDto implements IResponseMessage {
  public constructor(
    status: DeleteCertificateStatusEnum,
  ) {
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(DeleteCertificateStatusEnum)
  public status: DeleteCertificateStatusEnum

  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
