// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Element providing more information about the status.
 */
export class StatusInfoDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  /**
   * A predefined code for the reason why the status is returned in this response. The string is case-insensitive.
   */
  @IsNotEmpty()
  @Length(0, 20)
  @ApiProperty()
  public reasonCode!: string

  /**
   * Additional text to provide detailed information.
   */
  @IsOptional()
  @Length(0, 512)
  @ApiProperty()
  public additionalInfo!: string
}
