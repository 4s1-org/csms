// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Element providing more information about the status.
 */
export class StatusInfoDto {
  public constructor(
    reasonCode: string,
  ) {
    this.reasonCode = reasonCode
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * A predefined code for the reason why the status is returned in this response. The string is case-insensitive.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 20)
  public reasonCode: string

  /**
   * Additional text to provide detailed information.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 512)
  public additionalInfo!: string
}
