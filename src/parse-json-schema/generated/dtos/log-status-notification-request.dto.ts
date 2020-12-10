// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { UploadLogStatusEnum } from '../enums/upload-log-status.enum'

export class LogStatusNotificationRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public status: UploadLogStatusEnum

  @IsOptional()
  @ApiProperty()
  public requestId: number
}
