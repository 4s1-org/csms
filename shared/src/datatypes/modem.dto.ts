// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'

/**
 * Defines parameters required for initiating and maintaining wireless communication with other devices.
 */
export class ModemDto extends DatatypeBaseDto {
  public constructor() {
    super()
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * This contains the ICCID of the modem’s SIM card.
   * Required: false
   * identifierString[0..20]
   * 0..1
   */
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
  @IsOptional()
  @MaxLength(20)
  @IsString()
  public imsi!: string
}
