import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ReadingContextEnumDto } from './reading-context-enum.dto'
import { MeasurandEnumDto } from './measurand-enum.dto'
import { PhaseEnumDto } from './phase-enum.dto'
import { LocationEnumDto } from './location-enum.dto'
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
  public context: ReadingContextEnumDto

  @IsOptional()
  @ApiProperty()
  public measurand: MeasurandEnumDto

  @IsOptional()
  @ApiProperty()
  public phase: PhaseEnumDto

  @IsOptional()
  @ApiProperty()
  public location: LocationEnumDto

  @IsOptional()
  @ApiProperty()
  public signedMeterValue: SignedMeterValueDto

  @IsOptional()
  @ApiProperty()
  public unitOfMeasure: UnitOfMeasureDto
}
