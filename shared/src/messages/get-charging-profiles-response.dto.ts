// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GetChargingProfileStatusEnum } from '../enumerations/get-charging-profile-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class GetChargingProfilesResponseDto extends ResponseBaseDto {
  public constructor(
    status: GetChargingProfileStatusEnum,
  ) {
    super()
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(GetChargingProfileStatusEnum)
  public status: GetChargingProfileStatusEnum

  @IsOptional()
  @ValidateNested()
  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
