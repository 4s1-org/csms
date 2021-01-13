// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { UploadLogStatusEnum } from '../enumerations/upload-log-status.enum'

export class LogStatusNotificationRequestDto implements IRequestMessage {
  public constructor(
    status: UploadLogStatusEnum,
  ) {
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(UploadLogStatusEnum)
  public status: UploadLogStatusEnum

  /**
   * The request id that was provided in GetLogRequest that started this log upload. This field is mandatory,
   * unless the message was triggered by a TriggerMessageRequest AND there is no log upload ongoing.
   */
  @IsOptional()
  @IsInt()
  public requestId!: number
}
