// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ReserveNowStatusEnum } from '../enums/reserve-now-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class ReserveNowResponseDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public status!: ReserveNowStatusEnum

  @IsOptional()
  @ApiProperty()
  public statusInfo!: StatusInfoDto
}
