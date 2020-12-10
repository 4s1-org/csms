// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class GetReportRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public componentVariable: any

  @ApiProperty()
  public requestId: number

  @IsOptional()
  @ApiProperty()
  public componentCriteria: any
}
