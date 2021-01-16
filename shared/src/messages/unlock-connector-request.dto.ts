// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class UnlockConnectorRequestDto extends RequestBaseDto {
  public constructor(
    evseId: number,
    connectorId: number,
  ) {
    super()
    this.evseId = evseId
    this.connectorId = connectorId
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * This contains the identifier of the EVSE for which a connector needs to be unlocked.
   */
  @IsNotEmpty()
  @IsInt()
  public evseId: number

  /**
   * This contains the identifier of the connector that needs to be unlocked.
   */
  @IsNotEmpty()
  @IsInt()
  public connectorId: number
}
