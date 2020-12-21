// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ClearMessageStatusEnum } from '../enums/clear-message-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class ClearDisplayMessageResponseDto {
  public constructor(
    status: ClearMessageStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ClearMessageStatusEnum)
  public status: ClearMessageStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto
}
