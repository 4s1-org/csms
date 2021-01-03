// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
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

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(SetNetworkProfileStatusEnum)
  public status: SetNetworkProfileStatusEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
