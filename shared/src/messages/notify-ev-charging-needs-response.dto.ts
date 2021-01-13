// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { NotifyEvChargingNeedsStatusEnum } from '../enumerations/notify-ev-charging-needs-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class NotifyEvChargingNeedsResponseDto implements IResponseMessage {
  public constructor(
    status: NotifyEvChargingNeedsStatusEnum,
  ) {
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(NotifyEvChargingNeedsStatusEnum)
  public status: NotifyEvChargingNeedsStatusEnum

  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
