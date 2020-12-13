// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { NetworkConnectionProfileDto } from './network-connection-profile.dto'

export class SetNetworkProfileRequestDto {
  public constructor (
    configurationSlot: number
  ) {
    this.configurationSlot = configurationSlot
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public configurationSlot!: number

  @ApiProperty()
  @IsNotEmpty()
  public connectionData!: NetworkConnectionProfileDto
}
