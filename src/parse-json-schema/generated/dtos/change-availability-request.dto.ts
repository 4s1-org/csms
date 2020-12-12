// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { EVSEDto } from './evse.dto'
import { OperationalStatusEnum } from '../enums/operational-status.enum'

export class ChangeAvailabilityRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public evse!: EVSEDto

  @IsNotEmpty()
  @ApiProperty()
  public operationalStatus!: OperationalStatusEnum
}
