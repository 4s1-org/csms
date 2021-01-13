// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { IResponseMessage } from '../i-response-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { LogStatusEnum } from '../enumerations/log-status.enum'
import { StatusInfoDto } from '../datatypes/status-info.dto'

export class GetLogResponseDto implements IResponseMessage {
  public constructor(
    status: LogStatusEnum,
  ) {
    this.status = status
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(LogStatusEnum)
  public status: LogStatusEnum

  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto

  /**
   * This contains the name of the log file that will be uploaded. This field is not present when no logging information is available.
   */
  @IsOptional()
  @MaxLength(255)
  @IsString()
  public filename!: string
}
