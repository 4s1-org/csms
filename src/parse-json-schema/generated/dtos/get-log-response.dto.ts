// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
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
  @IsString()
  @Length(0, 255)
  public filename!: string
}
