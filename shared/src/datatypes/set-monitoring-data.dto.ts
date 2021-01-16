// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { MonitorEnum } from '../enumerations/monitor.enum'
import { VariableDto } from './variable.dto'

/**
 * Class to hold parameters of SetVariableMonitoring request.
 */
export class SetMonitoringDataDto extends DatatypeBaseDto {
  public constructor(
    value: number,
    type: MonitorEnum,
    severity: number,
    component: ComponentDto,
    variable: VariableDto,
  ) {
    super()
    this.value = value
    this.type = type
    this.severity = severity
    this.component = component
    this.variable = variable
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * An id SHALL only be given to replace an existing monitor. The Charging Station handles the generation of id's for new monitors.
   */
  @IsOptional()
  @IsInt()
  public id!: number

  /**
   * Monitor only active when a transaction is ongoing on a component relevant to this transaction. Default = false.
   */
  @IsOptional()
  @IsBoolean()
  public transaction!: boolean

  /**
   * Value for threshold or delta monitoring.
   * For Periodic or PeriodicClockAligned this is the interval in seconds.
   */
  @IsNotEmpty()
  @IsNumber()
  public value: number

  @IsNotEmpty()
  @IsEnum(MonitorEnum)
  public type: MonitorEnum

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

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ComponentDto)
  public component: ComponentDto

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => VariableDto)
  public variable: VariableDto
}
