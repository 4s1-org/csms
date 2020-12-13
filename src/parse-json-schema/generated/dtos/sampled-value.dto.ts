// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsNumber } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ReadingContextEnum } from '../enums/reading-context.enum'
import { MeasurandEnum } from '../enums/measurand.enum'
import { PhaseEnum } from '../enums/phase.enum'
import { LocationEnum } from '../enums/location.enum'
import { SignedMeterValueDto } from './signed-meter-value.dto'
import { UnitOfMeasureDto } from './unit-of-measure.dto'

/**
 * Sampled_ Value
urn:x-oca:ocpp:uid:2:233266
Single sampled value in MeterValues. Each value can be accompanied by optional fields.

To save on mobile data usage, default values of all of the optional fields are such that. The value without any additional fields will be interpreted, as a register reading of active import energy in Wh (Watt-hour) units.
 */
export class SampledValueDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  public value!: number

  @ApiProperty()
  @IsOptional()
  public context!: ReadingContextEnum

  @ApiProperty()
  @IsOptional()
  public measurand!: MeasurandEnum

  @ApiProperty()
  @IsOptional()
  public phase!: PhaseEnum

  @ApiProperty()
  @IsOptional()
  public location!: LocationEnum

  @ApiProperty()
  @IsOptional()
  public signedMeterValue!: SignedMeterValueDto

  @ApiProperty()
  @IsOptional()
  public unitOfMeasure!: UnitOfMeasureDto
}
