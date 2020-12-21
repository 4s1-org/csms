// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { LocationEnum } from '../enums/location.enum'
import { MeasurandEnum } from '../enums/measurand.enum'
import { PhaseEnum } from '../enums/phase.enum'
import { ReadingContextEnum } from '../enums/reading-context.enum'
import { SignedMeterValueDto } from './signed-meter-value.dto'
import { UnitOfMeasureDto } from './unit-of-measure.dto'

/**
 * Sampled_ Value
 * urn:x-oca:ocpp:uid:2:233266
 * Single sampled value in MeterValues. Each value can be accompanied by optional fields.
 * 
 * To save on mobile data usage, default values of all of the optional fields are such that. The value without any additional fields will be interpreted, as a register reading of active import energy in Wh (Watt-hour) units.
 */
export class SampledValueDto {
  public constructor(
    value: number,
  ) {
    this.value = value
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Sampled_ Value. Value. Measure
   * urn:x-oca:ocpp:uid:1:569260
   * Indicates the measured value.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  public value: number

  @ApiProperty()
  @IsOptional()
  @IsEnum(ReadingContextEnum)
  public context!: ReadingContextEnum

  @ApiProperty()
  @IsOptional()
  @IsEnum(MeasurandEnum)
  public measurand!: MeasurandEnum

  @ApiProperty()
  @IsOptional()
  @IsEnum(PhaseEnum)
  public phase!: PhaseEnum

  @ApiProperty()
  @IsOptional()
  @IsEnum(LocationEnum)
  public location!: LocationEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public signedMeterValue!: SignedMeterValueDto

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public unitOfMeasure!: UnitOfMeasureDto
}
