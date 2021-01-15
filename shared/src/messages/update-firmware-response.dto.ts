// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { StatusInfoDto } from '../datatypes/status-info.dto'
import { UpdateFirmwareStatusEnum } from '../enumerations/update-firmware-status.enum'

export class UpdateFirmwareResponseDto extends ResponseBaseDto {
  public constructor(
    status: UpdateFirmwareStatusEnum,
  ) {
    super()
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(UpdateFirmwareStatusEnum)
  public status: UpdateFirmwareStatusEnum

  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
