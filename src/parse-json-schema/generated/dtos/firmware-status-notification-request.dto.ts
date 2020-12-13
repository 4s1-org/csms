// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { FirmwareStatusEnum } from '../enums/firmware-status.enum'

export class FirmwareStatusNotificationRequestDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public status!: FirmwareStatusEnum

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public requestId!: number
}
