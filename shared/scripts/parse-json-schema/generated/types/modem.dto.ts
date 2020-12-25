// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'

/**
 * Defines parameters required for initiating and maintaining wireless communication with other devices.
 */
export class ModemDto {
  public constructor() {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * This contains the ICCID of the modem’s SIM card.
   * Required: false
   * identifierString[0..20]
   * 0..1
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(20)
  @IsString()
  public iccid!: string

  /**
   * This contains the IMSI of the modem’s SIM card.
   * Required: false
   * identifierString[0..20]
   * 0..1
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(20)
  @IsString()
  public imsi!: string
}
