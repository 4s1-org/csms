// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { GetDisplayMessagesStatusEnum } from '../enumerations/get-display-messages-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class GetDisplayMessagesResponseDto implements IResponseMessage {
  public constructor(
    status: GetDisplayMessagesStatusEnum,
  ) {
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(GetDisplayMessagesStatusEnum)
  public status: GetDisplayMessagesStatusEnum

  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
