// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { FirmwareStatusEnum } from '../enums/firmware-status.enum'

export class FirmwareStatusNotificationRequestDto {
  public constructor (
    status: FirmwareStatusEnum
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(FirmwareStatusEnum)
  public status: FirmwareStatusEnum

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public requestId!: number
}
