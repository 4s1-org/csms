// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { DisplayMessageStatusEnum } from '../enumerations/display-message-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class SetDisplayMessageResponseDto implements IResponseMessage {
  public constructor(
    status: DisplayMessageStatusEnum,
  ) {
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(DisplayMessageStatusEnum)
  public status: DisplayMessageStatusEnum

  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
