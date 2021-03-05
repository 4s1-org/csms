// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { StatusInfoDto } from '../datatypes/status-info.dto'
import { UpdateFirmwareStatusEnum } from '../enumerations/update-firmware-status.enum'

export class UpdateFirmwareResponseDto extends ResponseBaseDto {
  @Exclude()
  private _className: "UpdateFirmwareResponseDto" = "UpdateFirmwareResponseDto"

  public constructor(
    status: UpdateFirmwareStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: UpdateFirmwareStatusEnum

  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
