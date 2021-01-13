// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsDateString, IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { ConnectorStatusEnum } from '../enumerations/connector-status.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'

/**
 * ---
 */
export class StatusNotificationRequestDto implements IRequestMessage {
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

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * The time for which the status is reported. If absent time of receipt of the message will be assumed.
   * Required: true
   * dateTime
   * 1..1
   */
  @IsNotEmpty()
  @IsDateString()
  public timestamp: string

  /**
   * This contains the current status of the Connector.
   * Required: true
   * ConnectorStatusEnumType
   * 1..1
   */
  @IsNotEmpty()
  @IsEnum(ConnectorStatusEnum)
  public connectorStatus: ConnectorStatusEnum

  /**
   * The id of the EVSE to which the connector belongs for which the the status is reported.
   * Required: true
   * integer
   * 1..1
   */
  @IsNotEmpty()
  @IsInt()
  public evseId: number

  /**
   * The id of the connector within the EVSE for which the status is reported.
   * Required: true
   * integer
   * 1..1
   */
  @IsNotEmpty()
  @IsInt()
  public connectorId: number
}
