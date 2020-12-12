// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { FirmwareStatusEnum } from '../enums/firmware-status.enum'

export class FirmwareStatusNotificationRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public status!: FirmwareStatusEnum

  @IsOptional()
  @ApiProperty()
  public requestId!: number
}
