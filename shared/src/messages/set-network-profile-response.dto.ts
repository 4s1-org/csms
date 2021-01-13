// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { SetNetworkProfileStatusEnum } from '../enumerations/set-network-profile-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class SetNetworkProfileResponseDto implements IResponseMessage {
  public constructor(
    status: SetNetworkProfileStatusEnum,
  ) {
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(SetNetworkProfileStatusEnum)
  public status: SetNetworkProfileStatusEnum

  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
