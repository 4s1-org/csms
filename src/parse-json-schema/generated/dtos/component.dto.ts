// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { EVSEDto } from './evse.dto'

/**
 * A physical or logical component
 */
export class ComponentDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public evse!: EVSEDto

  /**
   * Name of the component. Name should be taken from the list of standardized component names whenever possible. Case Insensitive. strongly advised to use Camel Case.
   */
  @IsNotEmpty()
  @Length(0, 50)
  @ApiProperty()
  public name!: string

  /**
   * Name of instance in case the component exists as multiple instances. Case Insensitive. strongly advised to use Camel Case.
   */
  @IsOptional()
  @Length(0, 50)
  @ApiProperty()
  public instance!: string
}
