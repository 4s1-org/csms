// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { SetNetworkProfileStatusEnum } from '../enumerations/set-network-profile-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class SetNetworkProfileResponseDto extends ResponseBaseDto {
  public constructor(
    status: SetNetworkProfileStatusEnum,
  ) {
    super()
    this.status = status
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(SetNetworkProfileStatusEnum)
  public status: SetNetworkProfileStatusEnum

  @IsOptional()
  @Type(() => StatusInfoDto)
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
