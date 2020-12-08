import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * EVSE
urn:x-oca:ocpp:uid:2:233123
Electric Vehicle Supply Equipment
 */
export class EVSEDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public id: number

  @IsOptional()
  @ApiProperty()
  public connectorId: number
}
