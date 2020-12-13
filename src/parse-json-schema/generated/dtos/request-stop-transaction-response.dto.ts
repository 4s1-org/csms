// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { RequestStartStopStatusEnum } from '../enums/request-start-stop-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class RequestStopTransactionResponseDto {
  public constructor (
    status: RequestStartStopStatusEnum
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(RequestStartStopStatusEnum)
  public status: RequestStartStopStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto
}
