// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { FirmwareStatusEnum } from '../enumerations/firmware-status.enum'

export class FirmwareStatusNotificationRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: "FirmwareStatusNotificationRequestDto" = "FirmwareStatusNotificationRequestDto"

  public constructor(
    status: FirmwareStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: FirmwareStatusEnum

  /**
   * The request id that was provided in the
   * UpdateFirmwareRequest that started this firmware update.
   * This field is mandatory, unless the message was triggered by a TriggerMessageRequest AND there is no firmware update ongoing.
   */
  public requestId!: number
}
