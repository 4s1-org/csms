// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ConnectorStatusEnum } from '../enums/connector-status.enum'

export class StatusNotificationRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  /**
   * The time for which the status is reported. If absent time of receipt of the message will be assumed.
   */
  @IsNotEmpty()
  @ApiProperty()
  public timestamp!: string

  @IsNotEmpty()
  @ApiProperty()
  public connectorStatus!: ConnectorStatusEnum

  @IsNotEmpty()
  @ApiProperty()
  public evseId!: number

  @IsNotEmpty()
  @ApiProperty()
  public connectorId!: number
}
