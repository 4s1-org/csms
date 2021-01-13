// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { ClearChargingProfileStatusEnum } from '../enumerations/clear-charging-profile-status.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class ClearChargingProfileResponseDto implements IResponseMessage {
  public constructor(
    status: ClearChargingProfileStatusEnum,
  ) {
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(ClearChargingProfileStatusEnum)
  public status: ClearChargingProfileStatusEnum

  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
