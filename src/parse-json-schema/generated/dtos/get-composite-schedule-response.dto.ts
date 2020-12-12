// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { GenericStatusEnum } from '../enums/generic-status.enum'
import { StatusInfoDto } from './status-info.dto'
import { CompositeScheduleDto } from './composite-schedule.dto'

export class GetCompositeScheduleResponseDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public status!: GenericStatusEnum

  @IsOptional()
  @ApiProperty()
  public statusInfo!: StatusInfoDto

  @IsOptional()
  @ApiProperty()
  public schedule!: CompositeScheduleDto
}
