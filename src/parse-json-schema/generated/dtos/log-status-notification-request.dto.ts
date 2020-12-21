// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { UploadLogStatusEnum } from '../enums/upload-log-status.enum'

export class LogStatusNotificationRequestDto {
  public constructor(
    status: UploadLogStatusEnum
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

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public requestId!: number
}
