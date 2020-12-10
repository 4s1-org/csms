// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { DisplayMessageStatusEnum } from '../enums/display-message-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class SetDisplayMessageResponseDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public status: DisplayMessageStatusEnum

  @IsOptional()
  @ApiProperty()
  public statusInfo: StatusInfoDto
}
