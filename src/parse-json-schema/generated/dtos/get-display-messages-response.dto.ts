// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { GetDisplayMessagesStatusEnum } from '../enums/get-display-messages-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class GetDisplayMessagesResponseDto {
  public constructor(
    status: GetDisplayMessagesStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(GetDisplayMessagesStatusEnum)
  public status: GetDisplayMessagesStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto
}
