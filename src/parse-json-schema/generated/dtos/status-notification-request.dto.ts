// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ConnectorStatusEnum } from '../enums/connector-status.enum'

export class StatusNotificationRequestDto {
  public constructor(
    timestamp: string,
    connectorStatus: ConnectorStatusEnum,
    evseId: number,
    connectorId: number,
  ) {
    this.timestamp = timestamp
    this.connectorStatus = connectorStatus
    this.evseId = evseId
    this.connectorId = connectorId
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * The time for which the status is reported. If absent time of receipt of the message will be assumed.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public timestamp: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ConnectorStatusEnum)
  public connectorStatus: ConnectorStatusEnum

  /**
   * The id of the EVSE to which the connector belongs for which the the status is reported.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evseId: number

  /**
   * The id of the connector within the EVSE for which the status is reported.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public connectorId: number
}
