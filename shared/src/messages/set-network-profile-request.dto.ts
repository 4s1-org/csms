// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../types/custom-data.dto'
import { NetworkConnectionProfileDto } from '../types/network-connection-profile.dto'

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
  @ValidateNested()
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
  @ValidateNested()
  public connectionData: NetworkConnectionProfileDto
}
