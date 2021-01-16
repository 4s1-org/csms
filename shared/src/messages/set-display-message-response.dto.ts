// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { DisplayMessageStatusEnum } from '../enumerations/display-message-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class SetDisplayMessageResponseDto extends ResponseBaseDto {
  public constructor(
    status: DisplayMessageStatusEnum,
  ) {
    super()
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(DisplayMessageStatusEnum)
  public status: DisplayMessageStatusEnum

  @IsOptional()
  @ValidateNested()
  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto
}
