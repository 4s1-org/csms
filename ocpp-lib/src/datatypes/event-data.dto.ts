// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { EventNotificationEnum } from '../enumerations/event-notification.enum'
import { EventTriggerEnum } from '../enumerations/event-trigger.enum'
import { VariableDto } from './variable.dto'

/**
 * Class to report an event notification for a component-variable.
 */
export class EventDataDto extends DatatypeBaseDto {
  @Exclude()
  private _className: 'EventDataDto' = 'EventDataDto'

  public constructor(
    eventId: number,
    timestamp: string,
    trigger: EventTriggerEnum,
    actualValue: string,
    component: ComponentDto,
    eventNotificationType: EventNotificationEnum,
    variable: VariableDto,
  ) {
    super()
    this.eventId = eventId
    this.timestamp = timestamp
    this.trigger = trigger
    this.actualValue = actualValue
    this.component = component
    this.eventNotificationType = eventNotificationType
    this.variable = variable
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Identifies the event. This field can be referred to as a cause by other events.
   */
  public eventId: number

  /**
   * Timestamp of the moment the report was generated.
   */
  public timestamp: string

  public trigger: EventTriggerEnum

  /**
   * Refers to the Id of an event that is considered to be the cause for this event.
   */
  public cause!: number

  /**
   * Actual value (_attributeType_ Actual) of the variable.
   * 
   * The Configuration Variable <<configkey-reporting-value-size,ReportingValueSize>> can be used to limit GetVariableResult.attributeValue, VariableAttribute.value and EventData.actualValue. The max size of these values will always remain equal.
   */
  public actualValue: string

  /**
   * Technical (error) code as reported by component.
   */
  public techCode!: string

  /**
   * Technical detail information as reported by component.
   */
  public techInfo!: string

  /**
   * _Cleared_ is set to true to report the clearing of a monitored situation, i.e. a 'return to normal'.
   */
  public cleared!: boolean

  /**
   * If an event notification is linked to a specific transaction, this field can be used to specify its transactionId.
   */
  public transactionId!: string

  @Type(() => ComponentDto)
  public component: ComponentDto

  /**
   * Identifies the VariableMonitoring which triggered the event.
   */
  public variableMonitoringId!: number

  public eventNotificationType: EventNotificationEnum

  @Type(() => VariableDto)
  public variable: VariableDto
}
