import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Charging_ Schedule_ Period
urn:x-oca:ocpp:uid:2:233257
Charging schedule period structure defines a time period in a charging schedule.
 */
export class ChargingSchedulePeriodDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public startPeriod: number

  @ApiProperty()
  public limit: number

  @IsOptional()
  @ApiProperty()
  public numberPhases: number

  @IsOptional()
  @ApiProperty()
  public phaseToUse: number
}
