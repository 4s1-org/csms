import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * AC_ Charging_ Parameters
urn:x-oca:ocpp:uid:2:233250
EV AC charging parameters.
 */
export class ACChargingParametersDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public energyAmount: number

  @ApiProperty()
  public evMinCurrent: number

  @ApiProperty()
  public evMaxCurrent: number

  @ApiProperty()
  public evMaxVoltage: number
}
