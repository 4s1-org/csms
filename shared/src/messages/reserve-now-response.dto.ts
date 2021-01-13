// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { ReserveNowStatusEnum } from '../enumerations/reserve-now-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class ReserveNowResponseDto implements IResponseMessage {
  public constructor(
    status: ReserveNowStatusEnum,
  ) {
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(ReserveNowStatusEnum)
  public status: ReserveNowStatusEnum

  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
