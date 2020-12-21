// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsNumber, IsEnum } from 'class-validator'
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
  public constructor(
    value: number
  ) {
    this.value = value
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

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
  public signedMeterValue!: SignedMeterValueDto

  @ApiProperty()
  @IsOptional()
  public unitOfMeasure!: UnitOfMeasureDto
}
