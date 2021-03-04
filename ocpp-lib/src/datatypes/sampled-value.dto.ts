// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'
import { LocationEnum } from '../enumerations/location.enum'
import { MeasurandEnum } from '../enumerations/measurand.enum'
import { PhaseEnum } from '../enumerations/phase.enum'
import { ReadingContextEnum } from '../enumerations/reading-context.enum'
import { SignedMeterValueDto } from './signed-meter-value.dto'
import { UnitOfMeasureDto } from './unit-of-measure.dto'

/**
 * Single sampled value in MeterValues. Each value can be accompanied by optional fields. To save on mobile data usage, default values of all of the optional fields are such that. The value without any additional fields will be interpreted, as a register reading of active import energy in Wh (Watt-hour) units.
 */
export class SampledValueDto extends DatatypeBaseDto {
  private _className: "SampledValueDto" = "SampledValueDto"

  public constructor(
    value: number,
  ) {
    super()
    this.value = value
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Indicates the measured value.
   * Required: true
   * decimal
   * 1..1
   */
  public value: number

  /**
   * Type of detail value: start, end or sample. Default = "Sample.Periodic"
   * Required: false
   * ReadingContextEnumType
   * 0..1
   */
  public context!: ReadingContextEnum

  /**
   * Type of measurement. Default = "Energy.Active.Import.Register"
   * Required: false
   * MeasurandEnumType
   * 0..1
   */
  public measurand!: MeasurandEnum

  /**
   * Indicates how the measured value is to be interpreted. For instance between L1 and neutral (L1-N) Please note that not all values of phase are applicable to all Measurands. When phase is absent, the measured value is interpreted as an overall value.
   * Required: false
   * PhaseEnumType
   * 0..1
   */
  public phase!: PhaseEnum

  /**
   * Indicates where the measured value has been sampled. Default = "Outlet"
   * Required: false
   * LocationEnumType
   * 0..1
   */
  public location!: LocationEnum

  /**
   * Contains the MeterValueSignature with sign/encoding method information.
   * Required: false
   * SignedMeterValueType
   * 0..1
   */
  @Type(() => SignedMeterValueDto)
  public signedMeterValue!: SignedMeterValueDto

  /**
   * Represents a UnitOfMeasure including a multiplier
   * Required: false
   * UnitOfMeasureType
   * 0..1
   */
  @Type(() => UnitOfMeasureDto)
  public unitOfMeasure!: UnitOfMeasureDto
}
