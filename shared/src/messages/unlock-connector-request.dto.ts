// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class UnlockConnectorRequestDto implements IRequestMessage {
  public constructor(
    evseId: number,
    connectorId: number,
  ) {
    this.evseId = evseId
    this.connectorId = connectorId
  }

  @IsOptional()
  @ValidateNested()
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
