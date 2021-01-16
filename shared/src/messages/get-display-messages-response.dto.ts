// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GetDisplayMessagesStatusEnum } from '../enumerations/get-display-messages-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class GetDisplayMessagesResponseDto extends ResponseBaseDto {
  public constructor(
    status: GetDisplayMessagesStatusEnum,
  ) {
    super()
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(GetDisplayMessagesStatusEnum)
  public status: GetDisplayMessagesStatusEnum

  @IsOptional()
  @ValidateNested()
  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
