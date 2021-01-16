// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { MonitoringBaseEnum } from '../enumerations/monitoring-base.enum'

export class SetMonitoringBaseRequestDto extends RequestBaseDto {
  public constructor(
    monitoringBase: MonitoringBaseEnum,
  ) {
    super()
    this.monitoringBase = monitoringBase
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(MonitoringBaseEnum)
  public monitoringBase: MonitoringBaseEnum
}
