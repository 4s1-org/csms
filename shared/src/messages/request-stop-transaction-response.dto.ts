// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { RequestStartStopStatusEnum } from '../enumerations/request-start-stop-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class RequestStopTransactionResponseDto implements IResponseMessage {
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
