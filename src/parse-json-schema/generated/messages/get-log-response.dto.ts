// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../dtos/custom-data.dto'
import { LogStatusEnum } from '../enums/log-status.enum'
import { StatusInfoDto } from '../dtos/status-info.dto'

export class GetLogResponseDto {
  public constructor(
    status: LogStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(LogStatusEnum)
  public status: LogStatusEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
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
