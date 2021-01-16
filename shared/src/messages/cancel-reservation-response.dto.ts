// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CancelReservationStatusEnum } from '../enumerations/cancel-reservation-status.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class CancelReservationResponseDto extends ResponseBaseDto {
  public constructor(
    status: CancelReservationStatusEnum,
  ) {
    super()
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(CancelReservationStatusEnum)
  public status: CancelReservationStatusEnum

  @IsOptional()
  @ValidateNested()
  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
