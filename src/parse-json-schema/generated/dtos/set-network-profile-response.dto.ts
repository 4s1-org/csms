// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { SetNetworkProfileStatusEnum } from '../enums/set-network-profile-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class SetNetworkProfileResponseDto {
  public constructor(
    status: SetNetworkProfileStatusEnum
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(SetNetworkProfileStatusEnum)
  public status: SetNetworkProfileStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto
}
