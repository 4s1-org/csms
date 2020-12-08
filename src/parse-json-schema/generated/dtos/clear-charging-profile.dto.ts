import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingProfilePurposeEnumDto } from './charging-profile-purpose-enum.dto'

/**
 * Charging_ Profile
urn:x-oca:ocpp:uid:2:233255
A ChargingProfile consists of a ChargingSchedule, describing the amount of power or current that can be delivered per time interval.
 */
export class ClearChargingProfileDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public evseId: number

  @IsOptional()
  @ApiProperty()
  public chargingProfilePurpose: ChargingProfilePurposeEnumDto

  @IsOptional()
  @ApiProperty()
  public stackLevel: number
}
