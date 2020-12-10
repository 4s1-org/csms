// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { NetworkConnectionProfileDto } from './network-connection-profile.dto'

export class SetNetworkProfileRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public configurationSlot: number

  @ApiProperty()
  public connectionData: NetworkConnectionProfileDto
}
