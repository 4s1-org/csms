// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'

/**
 * Reference key to a component-variable.
 */
export class VariableDto extends DatatypeBaseDto {
  @Exclude()
  private _className: 'VariableDto' = 'VariableDto'

  public constructor(
    name: string,
  ) {
    super()
    this.name = name
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Name of the variable. Name should be taken from the list of standardized variable names whenever possible. Case Insensitive. strongly advised to use Camel Case.
   * Required: true
   * identifierString[0..50]
   * 1..1
   */
  public name: string

  /**
   * Name of instance in case the variable exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.
   * Required: false
   * identifierString[0..50]
   * 0..1
   */
  public instance!: string
}
