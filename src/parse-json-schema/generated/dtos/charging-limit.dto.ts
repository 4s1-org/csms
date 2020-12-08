import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ChargingLimitSourceEnumDto } from './charging-limit-source-enum.dto'

/**
 * Charging_ Limit
urn:x-enexis:ecdm:uid:2:234489
 */
export class ChargingLimitDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public chargingLimitSource: ChargingLimitSourceEnumDto

  @IsOptional()
  @ApiProperty()
  public isGridCritical: boolean
}
