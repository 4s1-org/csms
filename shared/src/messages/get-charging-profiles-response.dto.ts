// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GetChargingProfileStatusEnum } from '../enumerations/get-charging-profile-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class GetChargingProfilesResponseDto implements IResponseMessage {
  public constructor(
    status: GetChargingProfileStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(GetChargingProfileStatusEnum)
  public status: GetChargingProfileStatusEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
