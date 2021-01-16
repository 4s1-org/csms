// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
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

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Slot in which the configuration should be stored.
   */
  @IsNotEmpty()
  @IsInt()
  public configurationSlot: number

  @IsNotEmpty()
  @Type(() => NetworkConnectionProfileDto)
  @ValidateNested()
  public connectionData: NetworkConnectionProfileDto
}
