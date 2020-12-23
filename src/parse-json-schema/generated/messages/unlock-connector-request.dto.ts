// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../types/custom-data.dto'

export class UnlockConnectorRequestDto {
  public constructor(
    evseId: number,
    connectorId: number,
  ) {
    this.evseId = evseId
    this.connectorId = connectorId
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * This contains the identifier of the EVSE for which a connector needs to be unlocked.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evseId: number

  /**
   * This contains the identifier of the connector that needs to be unlocked.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public connectorId: number
}
