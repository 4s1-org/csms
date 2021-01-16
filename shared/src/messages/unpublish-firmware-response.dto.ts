// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { UnpublishFirmwareStatusEnum } from '../enumerations/unpublish-firmware-status.enum'

export class UnpublishFirmwareResponseDto extends ResponseBaseDto {
  public constructor(
    status: UnpublishFirmwareStatusEnum,
  ) {
    super()
    this.status = status
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(UnpublishFirmwareStatusEnum)
  public status: UnpublishFirmwareStatusEnum
}
