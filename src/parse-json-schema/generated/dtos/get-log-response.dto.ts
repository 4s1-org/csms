// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { LogStatusEnum } from '../enums/log-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class GetLogResponseDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public status: LogStatusEnum

  @IsOptional()
  @ApiProperty()
  public statusInfo: StatusInfoDto

  /**
   * This contains the name of the log file that will be uploaded. This field is not present when no logging information is available.
   */
  @IsOptional()
  @Length(0, 255)
  @ApiProperty()
  public filename: string
}
