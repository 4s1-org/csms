// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../dtos/custom-data.dto'
import { EVSEDto } from '../dtos/evse.dto'
import { OperationalStatusEnum } from '../enums/operational-status.enum'

export class ChangeAvailabilityRequestDto {
  public constructor(
    operationalStatus: OperationalStatusEnum,
  ) {
    this.operationalStatus = operationalStatus
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public evse!: EVSEDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(OperationalStatusEnum)
  public operationalStatus: OperationalStatusEnum
}
