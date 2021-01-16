// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { MonitorEnum } from '../enumerations/monitor.enum'
import { SetMonitoringStatusEnum } from '../enumerations/set-monitoring-status.enum'
import { StatusInfoDto } from './status-info.dto'
import { VariableDto } from './variable.dto'

/**
 * Class to hold result of SetVariableMonitoring request.
 */
export class SetMonitoringResultDto extends DatatypeBaseDto {
  public constructor(
    status: SetMonitoringStatusEnum,
    type: MonitorEnum,
    component: ComponentDto,
    variable: VariableDto,
    severity: number,
  ) {
    super()
    this.status = status
    this.type = type
    this.component = component
    this.variable = variable
    this.severity = severity
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Id given to the VariableMonitor by the Charging Station. The Id is only returned when status is accepted. Installed VariableMonitors should have unique id's but the id's of removed Installed monitors should have unique id's but the id's of removed monitors MAY be reused.
   */
  @IsOptional()
  @IsInt()
  public id!: number

  @IsOptional()
  @ValidateNested()
  @Type(() => StatusInfoDto)
  public statusInfo!: StatusInfoDto

  @IsNotEmpty()
  @IsEnum(SetMonitoringStatusEnum)
  public status: SetMonitoringStatusEnum

  @IsNotEmpty()
  @IsEnum(MonitorEnum)
  public type: MonitorEnum

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ComponentDto)
  public component: ComponentDto

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => VariableDto)
  public variable: VariableDto

  /**
   * The severity that will be assigned to an event that is triggered by this monitor. The severity range is 0-9, with 0 as the highest and 9 as the lowest severity level.
   * 
   * The severity levels have the following meaning: +
   * *0-Danger* +
   * Indicates lives are potentially in danger. Urgent attention is needed and action should be taken immediately. +
   * *1-Hardware Failure* +
   * Indicates that the Charging Station is unable to continue regular operations due to Hardware issues. Action is required. +
   * *2-System Failure* +
   * Indicates that the Charging Station is unable to continue regular operations due to software or minor hardware issues. Action is required. +
   * *3-Critical* +
   * Indicates a critical error. Action is required. +
   * *4-Error* +
   * Indicates a non-urgent error. Action is required. +
   * *5-Alert* +
   * Indicates an alert event. Default severity for any type of monitoring event.  +
   * *6-Warning* +
   * Indicates a warning event. Action may be required. +
   * *7-Notice* +
   * Indicates an unusual event. No immediate action is required. +
   * *8-Informational* +
   * Indicates a regular operational event. May be used for reporting, measuring throughput, etc. No action is required. +
   * *9-Debug* +
   * Indicates information useful to developers for debugging, not useful during operations.
   */
  @IsNotEmpty()
  @IsInt()
  public severity: number
}
