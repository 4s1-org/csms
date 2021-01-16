// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { ReserveNowStatusEnum } from '../enumerations/reserve-now-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class ReserveNowResponseDto extends ResponseBaseDto {
  public constructor(
    status: ReserveNowStatusEnum,
  ) {
    super()
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(ReserveNowStatusEnum)
  public status: ReserveNowStatusEnum

  @IsOptional()
  @ValidateNested()
  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
