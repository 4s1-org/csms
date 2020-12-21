// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { UploadLogStatusEnum } from '../enums/upload-log-status.enum'

export class LogStatusNotificationRequestDto {
  public constructor(
    status: UploadLogStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(UploadLogStatusEnum)
  public status: UploadLogStatusEnum

  /**
   * The request id that was provided in GetLogRequest that started this log upload. This field is mandatory,
   * unless the message was triggered by a TriggerMessageRequest AND there is no log upload ongoing.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public requestId!: number
}
