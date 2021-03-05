// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'
import { EvseDto } from './evse.dto'

/**
 * A physical or logical component
 */
export class ComponentDto extends DatatypeBaseDto {
  private _className: "ComponentDto" = "ComponentDto"

  public constructor(
    name: string,
  ) {
    super()
    this.name = name
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Specifies the EVSE when component is located at EVSE level, also specifies the connector when component is located at Connector level.
   * Required: false
   * EVSEType
   * 0..1
   */
  @Type(() => EvseDto)
  public evse!: EvseDto

  /**
   * Name of the component. Name should be taken from the list of standardized component names whenever possible. Case Insensitive. strongly advised to use Camel Case.
   * Required: true
   * identifierString[0..50]
   * 1..1
   */
  public name: string

  /**
   * Name of instance in case the component exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.
   * Required: false
   * identifierString[0..50]
   * 0..1
   */
  public instance!: string
}
