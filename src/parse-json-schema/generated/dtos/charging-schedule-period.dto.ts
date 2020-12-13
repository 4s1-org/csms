// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsNumber } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Charging_ Schedule_ Period
urn:x-oca:ocpp:uid:2:233257
Charging schedule period structure defines a time period in a charging schedule.
 */
export class ChargingSchedulePeriodDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public startPeriod!: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  public limit!: number

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public numberPhases!: number

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public phaseToUse!: number
}
