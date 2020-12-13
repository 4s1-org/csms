// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { FirmwareDto } from './firmware.dto'

export class UpdateFirmwareRequestDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public retries!: number

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public retryInterval!: number

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public requestId!: number

  @ApiProperty()
  @IsNotEmpty()
  public firmware!: FirmwareDto
}
