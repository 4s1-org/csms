// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../dtos/custom-data.dto'
import { RequestStartStopStatusEnum } from '../enums/request-start-stop-status.enum'
import { StatusInfoDto } from '../dtos/status-info.dto'

export class RequestStopTransactionResponseDto {
  public constructor(
    status: RequestStartStopStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(RequestStartStopStatusEnum)
  public status: RequestStartStopStatusEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
