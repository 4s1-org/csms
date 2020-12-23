// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../types/custom-data.dto'
import { GetDisplayMessagesStatusEnum } from '../enumerations/get-display-messages-status.enum'
import { StatusInfoDto } from '../types/status-info.dto'

export class GetDisplayMessagesResponseDto {
  public constructor(
    status: GetDisplayMessagesStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(GetDisplayMessagesStatusEnum)
  public status: GetDisplayMessagesStatusEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
