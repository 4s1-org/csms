// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../types/custom-data.dto'
import { LogEnum } from '../enumerations/log.enum'
import { LogParametersDto } from '../types/log-parameters.dto'

export class GetLogRequestDto {
  public constructor(
    log: LogParametersDto,
    logType: LogEnum,
    requestId: number,
  ) {
    this.log = log
    this.logType = logType
    this.requestId = requestId
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  public log: LogParametersDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(LogEnum)
  public logType: LogEnum

  /**
   * The Id of this request
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  /**
   * This specifies how many times the Charging Station must try to upload the log before giving up. If this field is not present, it is left to Charging Station to decide how many times it wants to retry.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public retries!: number

  /**
   * The interval in seconds after which a retry may be attempted. If this field is not present, it is left to Charging Station to decide how long to wait between attempts.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public retryInterval!: number
}
