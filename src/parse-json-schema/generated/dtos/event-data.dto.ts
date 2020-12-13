// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsString, IsBoolean, IsEnum, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { EventTriggerEnum } from '../enums/event-trigger.enum'
import { ComponentDto } from './component.dto'
import { EventNotificationEnum } from '../enums/event-notification.enum'
import { VariableDto } from './variable.dto'

/**
 * Class to report an event notification for a component-variable.
 */
export class EventDataDto {
  public constructor (
    eventId: number,
    timestamp: string,
    trigger: EventTriggerEnum,
    actualValue: string,
    component: ComponentDto,
    eventNotificationType: EventNotificationEnum,
    variable: VariableDto
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

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public cause!: number

  /**
   * Actual value (_attributeType_ Actual) of the variable.

The Configuration Variable <<configkey-reporting-value-size,ReportingValueSize>> can be used to limit GetVariableResult.attributeValue, VariableAttribute.value and EventData.actualValue. The max size of these values will always remain equal.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 2500)
  @IsString()
  public actualValue: string

  /**
   * Technical (error) code as reported by component.
   */
  @ApiProperty()
  @IsOptional()
  @Length(0, 50)
  @IsString()
  public techCode!: string

  /**
   * Technical detail information as reported by component.
   */
  @ApiProperty()
  @IsOptional()
  @Length(0, 500)
  @IsString()
  public techInfo!: string

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public cleared!: boolean

  /**
   * If an event notification is linked to a specific transaction, this field can be used to specify its transactionId.
   */
  @ApiProperty()
  @IsOptional()
  @Length(0, 36)
  @IsString()
  public transactionId!: string

  @ApiProperty()
  @IsNotEmpty()
  public component: ComponentDto

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
