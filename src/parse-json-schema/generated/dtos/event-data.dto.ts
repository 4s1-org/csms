// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { EventNotificationEnum } from '../enums/event-notification.enum'
import { EventTriggerEnum } from '../enums/event-trigger.enum'
import { VariableDto } from './variable.dto'

/**
 * Class to report an event notification for a component-variable.
 */
export class EventDataDto {
  public constructor(
    eventId: number,
    timestamp: string,
    trigger: EventTriggerEnum,
    actualValue: string,
    component: ComponentDto,
    eventNotificationType: EventNotificationEnum,
    variable: VariableDto,
  ) {
    this.eventId = eventId
    this.timestamp = timestamp
    this.trigger = trigger
    this.actualValue = actualValue
    this.component = component
    this.eventNotificationType = eventNotificationType
    this.variable = variable
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Identifies the event. This field can be referred to as a cause by other events.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public eventId: number

  /**
   * Timestamp of the moment the report was generated.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public timestamp: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(EventTriggerEnum)
  public trigger: EventTriggerEnum

  /**
   * Refers to the Id of an event that is considered to be the cause for this event.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public cause!: number

  /**
   * Actual value (_attributeType_ Actual) of the variable.
   * 
   * The Configuration Variable <<configkey-reporting-value-size,ReportingValueSize>> can be used to limit GetVariableResult.attributeValue, VariableAttribute.value and EventData.actualValue. The max size of these values will always remain equal.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 2500)
  public actualValue: string

  /**
   * Technical (error) code as reported by component.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 50)
  public techCode!: string

  /**
   * Technical detail information as reported by component.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 500)
  public techInfo!: string

  /**
   * _Cleared_ is set to true to report the clearing of a monitored situation, i.e. a 'return to normal'.
   */
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public cleared!: boolean

  /**
   * If an event notification is linked to a specific transaction, this field can be used to specify its transactionId.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 36)
  public transactionId!: string

  @ApiProperty()
  @IsNotEmpty()
  public component: ComponentDto

  /**
   * Identifies the VariableMonitoring which triggered the event.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public variableMonitoringId!: number

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(EventNotificationEnum)
  public eventNotificationType: EventNotificationEnum

  @ApiProperty()
  @IsNotEmpty()
  public variable: VariableDto
}
