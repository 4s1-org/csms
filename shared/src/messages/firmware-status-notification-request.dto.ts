// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { FirmwareStatusEnum } from '../enumerations/firmware-status.enum'

export class FirmwareStatusNotificationRequestDto implements IRequestMessage {
  public constructor(
    status: FirmwareStatusEnum,
  ) {
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(FirmwareStatusEnum)
  public status: FirmwareStatusEnum

  /**
   * The request id that was provided in the
   * UpdateFirmwareRequest that started this firmware update.
   * This field is mandatory, unless the message was triggered by a TriggerMessageRequest AND there is no firmware update ongoing.
   */
  @IsOptional()
  @IsInt()
  public requestId!: number
}
