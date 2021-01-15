// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'
import { LocationEnum } from '../enumerations/location.enum'
import { MeasurandEnum } from '../enumerations/measurand.enum'
import { PhaseEnum } from '../enumerations/phase.enum'
import { ReadingContextEnum } from '../enumerations/reading-context.enum'
import { SignedMeterValueDto } from './signed-meter-value.dto'
import { UnitOfMeasureDto } from './unit-of-measure.dto'

/**
 * Sampled_ Value
 * urn:x-oca:ocpp:uid:2:233266
 * Single sampled value in MeterValues. Each value can be accompanied by optional fields.
 * 
 * To save on mobile data usage, default values of all of the optional fields are such that. The value without any additional fields will be interpreted, as a register reading of active import energy in Wh (Watt-hour) units.
 */
export class SampledValueDto extends DatatypeBaseDto {
  public constructor(
    value: number,
  ) {
    super()
    this.value = value
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Sampled_ Value. Value. Measure
   * urn:x-oca:ocpp:uid:1:569260
   * Indicates the measured value.
   */
  @IsNotEmpty()
  @IsNumber()
  public value: number

  @IsOptional()
  @IsEnum(ReadingContextEnum)
  public context!: ReadingContextEnum

  @IsOptional()
  @IsEnum(MeasurandEnum)
  public measurand!: MeasurandEnum

  @IsOptional()
  @IsEnum(PhaseEnum)
  public phase!: PhaseEnum

  @IsOptional()
  @IsEnum(LocationEnum)
  public location!: LocationEnum

  @IsOptional()
  @ValidateNested()
  public signedMeterValue!: SignedMeterValueDto

  @IsOptional()
  @ValidateNested()
  public unitOfMeasure!: UnitOfMeasureDto
}
