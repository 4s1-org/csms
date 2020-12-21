// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { EVSEDto } from './evse.dto'

/**
 * A physical or logical component
 */
export class ComponentDto {
  public constructor(
    name: string,
  ) {
    this.name = name
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public evse!: EVSEDto

  /**
   * Name of the component. Name should be taken from the list of standardized component names whenever possible. Case Insensitive. strongly advised to use Camel Case.
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(50)
  @IsString()
  public name: string

  /**
   * Name of instance in case the component exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(50)
  @IsString()
  public instance!: string
}
