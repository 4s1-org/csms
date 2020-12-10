// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ConnectorStatusEnum } from '../enums/connector-status.enum'

export class StatusNotificationRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  /**
   * The time for which the status is reported. If absent time of receipt of the message will be assumed.
   */
  @ApiProperty()
  public timestamp: string

  @ApiProperty()
  public connectorStatus: ConnectorStatusEnum

  @ApiProperty()
  public evseId: number

  @ApiProperty()
  public connectorId: number
}
