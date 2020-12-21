// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * EVSE
urn:x-oca:ocpp:uid:2:233123
Electric Vehicle Supply Equipment
 */
export class EVSEDto {
  public constructor(
    id: number
  ) {
    this.id = id
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public id: number

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public connectorId!: number
}
