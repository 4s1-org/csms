// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { SendLocalListStatusEnum } from '../enums/send-local-list-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class SendLocalListResponseDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public status: SendLocalListStatusEnum

  @IsOptional()
  @ApiProperty()
  public statusInfo: StatusInfoDto
}
