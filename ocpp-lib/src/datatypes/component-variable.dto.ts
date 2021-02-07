// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { ComponentDto } from './component.dto'
import { CustomDataDto } from './custom-data.dto'
import { VariableDto } from './variable.dto'

/**
 * Class to report components, variables and variable attributes and characteristics.
 */
export class ComponentVariableDto extends DatatypeBaseDto {
  public constructor(
    component: ComponentDto,
  ) {
    super()
    this.component = component
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => ComponentDto)
  public component: ComponentDto

  @Type(() => VariableDto)
  public variable!: VariableDto
}
