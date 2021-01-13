// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GenericDeviceModelStatusEnum } from '../enumerations/generic-device-model-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class GetMonitoringReportResponseDto implements IResponseMessage {
  public constructor(
    status: GenericDeviceModelStatusEnum,
  ) {
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(GenericDeviceModelStatusEnum)
  public status: GenericDeviceModelStatusEnum

  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
