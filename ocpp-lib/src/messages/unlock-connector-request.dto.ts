// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
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

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * This contains the identifier of the EVSE for which a connector needs to be unlocked.
   */
  public evseId: number

  /**
   * This contains the identifier of the connector that needs to be unlocked.
   */
  public connectorId: number
}
