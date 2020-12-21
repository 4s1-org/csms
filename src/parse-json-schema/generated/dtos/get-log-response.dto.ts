// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { LogStatusEnum } from '../enums/log-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class GetLogResponseDto {
  public constructor(
    status: LogStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(LogStatusEnum)
  public status: LogStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto

  /**
   * This contains the name of the log file that will be uploaded. This field is not present when no logging information is available.
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(255)
  @IsString()
  public filename!: string
}
