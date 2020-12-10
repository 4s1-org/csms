// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { PublishFirmwareStatusEnum } from '../enums/publish-firmware-status.enum'

export class PublishFirmwareStatusNotificationRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public status: PublishFirmwareStatusEnum

  @IsOptional()
  @ApiProperty()
  public location: any

  @IsOptional()
  @ApiProperty()
  public requestId: number
}
