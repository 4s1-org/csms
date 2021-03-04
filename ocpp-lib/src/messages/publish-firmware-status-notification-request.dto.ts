// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { PublishFirmwareStatusEnum } from '../enumerations/publish-firmware-status.enum'

export class PublishFirmwareStatusNotificationRequestDto extends RequestBaseDto {
  private _className: "PublishFirmwareStatusNotificationRequestDto" = "PublishFirmwareStatusNotificationRequestDto"

  public constructor(
    status: PublishFirmwareStatusEnum,
  ) {
    super()
    this.status = status
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public status: PublishFirmwareStatusEnum

  /**
   * Required if status is Published. Can be multiple URI’s, if the Local Controller supports e.g. HTTP, HTTPS, and FTP.
   */
  public location!: string[]

  /**
   * The request id that was
   * provided in the
   * PublishFirmwareRequest which
   * triggered this action.
   */
  public requestId!: number
}
