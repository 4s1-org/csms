// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
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
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * A predefined code for the reason why the status is returned in this response. The string is case-insensitive.
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(20)
  @IsString()
  public reasonCode: string

  /**
   * Additional text to provide detailed information.
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(512)
  @IsString()
  public additionalInfo!: string
}
