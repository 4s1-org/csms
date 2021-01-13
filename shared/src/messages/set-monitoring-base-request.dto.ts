// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { MonitoringBaseEnum } from '../enumerations/monitoring-base.enum'

export class SetMonitoringBaseRequestDto implements IRequestMessage {
  public constructor(
    monitoringBase: MonitoringBaseEnum,
  ) {
    this.monitoringBase = monitoringBase
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(MonitoringBaseEnum)
  public monitoringBase: MonitoringBaseEnum
}
