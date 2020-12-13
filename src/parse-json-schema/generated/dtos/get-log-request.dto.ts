// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsEnum } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { LogParametersDto } from './log-parameters.dto'
import { LogEnum } from '../enums/log.enum'

export class GetLogRequestDto {
  public constructor (
    log: LogParametersDto,
    logType: LogEnum,
    requestId: number
  ) {
    this.log = log
    this.logType = logType
    this.requestId = requestId
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public log: LogParametersDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(LogEnum)
  public logType: LogEnum

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public retries!: number

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public retryInterval!: number
}
