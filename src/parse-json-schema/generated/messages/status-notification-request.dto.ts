// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator'
import { ConnectorStatusEnum } from '../enumerations/connector-status.enum'
import { CustomDataDto } from '../types/custom-data.dto'

/**
 * ---
 */
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
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * The time for which the status is reported. If absent time of receipt of the message will be assumed.
   * Required: true
   * dateTime
   * 1..1
   */
  @ApiProperty()
  @IsNotEmpty()
  // setFormat: date-time
  @IsString()
  public timestamp: string

  /**
   * This contains the current status of the Connector.
   * Required: true
   * ConnectorStatusEnumType
   * 1..1
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(ConnectorStatusEnum)
  public connectorStatus: ConnectorStatusEnum

  /**
   * The id of the EVSE to which the connector belongs for which the the status is reported.
   * Required: true
   * integer
   * 1..1
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public evseId: number

  /**
   * The id of the connector within the EVSE for which the status is reported.
   * Required: true
   * integer
   * 1..1
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public connectorId: number
}
