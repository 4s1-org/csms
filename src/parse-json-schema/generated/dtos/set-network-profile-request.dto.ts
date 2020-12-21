// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsInt, IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { NetworkConnectionProfileDto } from './network-connection-profile.dto'

export class SetNetworkProfileRequestDto {
  public constructor(
    configurationSlot: number,
    connectionData: NetworkConnectionProfileDto,
  ) {
    this.configurationSlot = configurationSlot
    this.connectionData = connectionData
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Slot in which the configuration should be stored.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public configurationSlot: number

  @ApiProperty()
  @IsNotEmpty()
  public connectionData: NetworkConnectionProfileDto
}
