// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { LogParametersDto } from './log-parameters.dto'
import { LogEnum } from '../enums/log.enum'

export class GetLogRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public log!: LogParametersDto

  @IsNotEmpty()
  @ApiProperty()
  public logType!: LogEnum

  @IsNotEmpty()
  @ApiProperty()
  public requestId!: number

  @IsOptional()
  @ApiProperty()
  public retries!: number

  @IsOptional()
  @ApiProperty()
  public retryInterval!: number
}
