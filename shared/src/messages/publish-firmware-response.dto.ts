// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GenericStatusEnum } from '../enumerations/generic-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class PublishFirmwareResponseDto implements IResponseMessage {
  public constructor(
    status: GenericStatusEnum,
  ) {
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(GenericStatusEnum)
  public status: GenericStatusEnum

  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
