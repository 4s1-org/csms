// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Reference key to a component-variable.
 */
export class VariableDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  /**
   * Name of the variable. Name should be taken from the list of standardized variable names whenever possible. Case Insensitive. strongly advised to use Camel Case.
   */
  @Length(0, 50)
  @ApiProperty()
  public name: string

  /**
   * Name of instance in case the variable exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.
   */
  @IsOptional()
  @Length(0, 50)
  @ApiProperty()
  public instance: string
}
