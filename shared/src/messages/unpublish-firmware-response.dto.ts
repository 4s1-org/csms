// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { UnpublishFirmwareStatusEnum } from '../enumerations/unpublish-firmware-status.enum'

export class UnpublishFirmwareResponseDto implements IResponseMessage {
  public constructor(
    status: UnpublishFirmwareStatusEnum,
  ) {
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(UnpublishFirmwareStatusEnum)
  public status: UnpublishFirmwareStatusEnum
}
