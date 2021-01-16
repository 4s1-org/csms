// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'
import { EvseDto } from './evse.dto'

/**
 * A physical or logical component
 */
export class ComponentDto extends DatatypeBaseDto {
  public constructor(
    name: string,
  ) {
    super()
    this.name = name
  }

  @IsOptional()
  @Type(() => CustomDataDto)
  @ValidateNested()
  public customData!: CustomDataDto

  @IsOptional()
  @Type(() => EvseDto)
  @ValidateNested()
  public evse!: EvseDto

  /**
   * Name of the component. Name should be taken from the list of standardized component names whenever possible. Case Insensitive. strongly advised to use Camel Case.
   */
  @IsNotEmpty()
  @MaxLength(50)
  @IsString()
  public name: string

  /**
   * Name of instance in case the component exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.
   */
  @IsOptional()
  @MaxLength(50)
  @IsString()
  public instance!: string
}
