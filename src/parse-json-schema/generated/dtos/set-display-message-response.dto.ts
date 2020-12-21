// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { DisplayMessageStatusEnum } from '../enums/display-message-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class SetDisplayMessageResponseDto {
  public constructor(
    status: DisplayMessageStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(DisplayMessageStatusEnum)
  public status: DisplayMessageStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto
}
