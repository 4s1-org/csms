// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { UnpublishFirmwareStatusEnum } from '../enumerations/unpublish-firmware-status.enum'

export class UnpublishFirmwareResponseDto extends ResponseBaseDto {
  @Exclude()
  private _className: "UnpublishFirmwareResponseDto" = "UnpublishFirmwareResponseDto"

  public constructor(
    status: UnpublishFirmwareStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: UnpublishFirmwareStatusEnum
}
