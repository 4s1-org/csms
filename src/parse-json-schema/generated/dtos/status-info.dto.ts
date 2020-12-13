// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Element providing more information about the status.
 */
export class StatusInfoDto {
  public constructor () {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * A predefined code for the reason why the status is returned in this response. The string is case-insensitive.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 20)
  @IsString()
  public reasonCode!: string

  /**
   * Additional text to provide detailed information.
   */
  @ApiProperty()
  @IsOptional()
  @Length(0, 512)
  @IsString()
  public additionalInfo!: string
}
