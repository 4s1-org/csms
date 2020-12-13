// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { PublishFirmwareStatusEnum } from '../enums/publish-firmware-status.enum'

export class PublishFirmwareStatusNotificationRequestDto {
  public constructor (
    status: PublishFirmwareStatusEnum
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(PublishFirmwareStatusEnum)
  public status: PublishFirmwareStatusEnum

  @ApiProperty()
  @IsOptional()
  public location!: any

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public requestId!: number
}
