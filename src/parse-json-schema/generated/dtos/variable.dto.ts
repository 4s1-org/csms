// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Reference key to a component-variable.
 */
export class VariableDto {
  public constructor(
    name: string
  ) {
    this.name = name
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Name of the variable. Name should be taken from the list of standardized variable names whenever possible. Case Insensitive. strongly advised to use Camel Case.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 50)
  @IsString()
  public name: string

  /**
   * Name of instance in case the variable exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.
   */
  @ApiProperty()
  @IsOptional()
  @Length(0, 50)
  @IsString()
  public instance!: string
}
