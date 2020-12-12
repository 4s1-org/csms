// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { NetworkConnectionProfileDto } from './network-connection-profile.dto'

export class SetNetworkProfileRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public configurationSlot!: number

  @IsNotEmpty()
  @ApiProperty()
  public connectionData!: NetworkConnectionProfileDto
}
