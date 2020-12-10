// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { FirmwareDto } from './firmware.dto'

export class UpdateFirmwareRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public retries: number

  @IsOptional()
  @ApiProperty()
  public retryInterval: number

  @ApiProperty()
  public requestId: number

  @ApiProperty()
  public firmware: FirmwareDto
}
