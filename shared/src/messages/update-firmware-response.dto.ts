// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { StatusInfoDto } from '../datatypes/status-info.dto'
import { UpdateFirmwareStatusEnum } from '../enumerations/update-firmware-status.enum'

export class UpdateFirmwareResponseDto implements IResponseMessage {
  public constructor(
    status: UpdateFirmwareStatusEnum,
  ) {
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
