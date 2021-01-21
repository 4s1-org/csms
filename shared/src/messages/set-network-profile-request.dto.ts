// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { NetworkConnectionProfileDto } from '../datatypes/network-connection-profile.dto'

export class SetNetworkProfileRequestDto extends RequestBaseDto {
  public constructor(
    configurationSlot: number,
    connectionData: NetworkConnectionProfileDto,
  ) {
    super()
    this.configurationSlot = configurationSlot
    this.connectionData = connectionData
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Slot in which the configuration should be stored.
   */
  public configurationSlot: number

  @Type(() => NetworkConnectionProfileDto)
  public connectionData: NetworkConnectionProfileDto
}
