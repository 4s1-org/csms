// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, Length } from 'class-validator'
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
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public eventId!: number

  /**
   * Timestamp of the moment the report was generated.
   */
  @IsNotEmpty()
  @ApiProperty()
  public timestamp!: string

  @IsNotEmpty()
  @ApiProperty()
  public trigger!: EventTriggerEnum

  @IsOptional()
  @ApiProperty()
  public cause!: number

  /**
   * Actual value (_attributeType_ Actual) of the variable.

The Configuration Variable <<configkey-reporting-value-size,ReportingValueSize>> can be used to limit GetVariableResult.attributeValue, VariableAttribute.value and EventData.actualValue. The max size of these values will always remain equal.
   */
  @IsNotEmpty()
  @Length(0, 2500)
  @ApiProperty()
  public actualValue!: string

  /**
   * Technical (error) code as reported by component.
   */
  @IsOptional()
  @Length(0, 50)
  @ApiProperty()
  public techCode!: string

  /**
   * Technical detail information as reported by component.
   */
  @IsOptional()
  @Length(0, 500)
  @ApiProperty()
  public techInfo!: string

  @IsOptional()
  @ApiProperty()
  public cleared!: boolean

  /**
   * If an event notification is linked to a specific transaction, this field can be used to specify its transactionId.
   */
  @IsOptional()
  @Length(0, 36)
  @ApiProperty()
  public transactionId!: string

  @IsNotEmpty()
  @ApiProperty()
  public component!: ComponentDto

  @IsOptional()
  @ApiProperty()
  public variableMonitoringId!: number

  @IsNotEmpty()
  @ApiProperty()
  public eventNotificationType!: EventNotificationEnum

  @IsNotEmpty()
  @ApiProperty()
  public variable!: VariableDto
}
