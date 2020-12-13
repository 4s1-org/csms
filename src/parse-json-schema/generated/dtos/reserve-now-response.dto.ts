// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ReserveNowStatusEnum } from '../enums/reserve-now-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class ReserveNowResponseDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public status!: ReserveNowStatusEnum

  @ApiProperty()
  @IsOptional()
  public statusInfo!: StatusInfoDto
}
