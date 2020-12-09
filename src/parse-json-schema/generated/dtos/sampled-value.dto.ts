// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
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
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public value: number

  @IsOptional()
  @ApiProperty()
  public context: ReadingContextEnum

  @IsOptional()
  @ApiProperty()
  public measurand: MeasurandEnum

  @IsOptional()
  @ApiProperty()
  public phase: PhaseEnum

  @IsOptional()
  @ApiProperty()
  public location: LocationEnum

  @IsOptional()
  @ApiProperty()
  public signedMeterValue: SignedMeterValueDto

  @IsOptional()
  @ApiProperty()
  public unitOfMeasure: UnitOfMeasureDto
}
