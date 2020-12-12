// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ClearMessageStatusEnum } from '../enums/clear-message-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class ClearDisplayMessageResponseDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public status!: ClearMessageStatusEnum

  @IsOptional()
  @ApiProperty()
  public statusInfo!: StatusInfoDto
}
