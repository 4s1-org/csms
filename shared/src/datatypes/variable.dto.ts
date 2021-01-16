// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'

/**
 * Reference key to a component-variable.
 */
export class VariableDto extends DatatypeBaseDto {
  public constructor(
    name: string,
  ) {
    super()
    this.name = name
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Name of the variable. Name should be taken from the list of standardized variable names whenever possible. Case Insensitive. strongly advised to use Camel Case.
   */
  @IsNotEmpty()
  @MaxLength(50)
  @IsString()
  public name: string

  /**
   * Name of instance in case the variable exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.
   */
  @IsOptional()
  @MaxLength(50)
  @IsString()
  public instance!: string
}
