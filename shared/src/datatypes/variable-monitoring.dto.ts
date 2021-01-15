// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, ValidateNested } from 'class-validator'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'
import { MonitorEnum } from '../enumerations/monitor.enum'

/**
 * A monitoring setting for a variable.
 */
export class VariableMonitoringDto extends DatatypeBaseDto {
  public constructor(
    id: number,
    transaction: boolean,
    value: number,
    type: MonitorEnum,
    severity: number,
  ) {
    super()
    this.id = id
    this.transaction = transaction
    this.value = value
    this.type = type
    this.severity = severity
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Identifies the monitor.
   */
  @IsNotEmpty()
  @IsInt()
  public id: number

  /**
   * Monitor only active when a transaction is ongoing on a component relevant to this transaction.
   */
  @IsNotEmpty()
  @IsBoolean()
  public transaction: boolean

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
}
