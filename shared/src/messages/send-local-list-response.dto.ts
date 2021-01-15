// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { SendLocalListStatusEnum } from '../enumerations/send-local-list-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class SendLocalListResponseDto extends ResponseBaseDto {
  public constructor(
    status: SendLocalListStatusEnum,
  ) {
    super()
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(SendLocalListStatusEnum)
  public status: SendLocalListStatusEnum

  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
