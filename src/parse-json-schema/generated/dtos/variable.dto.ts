// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'

/**
 * Reference key to a component-variable.
 */
export class VariableDto {
  public constructor(
    name: string,
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
  @IsString()
  @Length(0, 50)
  public name: string

  /**
   * Name of instance in case the variable exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 50)
  public instance!: string
}
