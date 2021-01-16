// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'

/**
 * Element providing more information about the status.
 */
export class StatusInfoDto extends DatatypeBaseDto {
  public constructor(
    reasonCode: string,
  ) {
    super()
    this.reasonCode = reasonCode
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * A predefined code for the reason why the status is returned in this response. The string is caseinsensitive.
   * Required: true
   * string[0..20]
   * 1..1
   */
  @IsNotEmpty()
  @MaxLength(20)
  @IsString()
  public reasonCode: string

  /**
   * Additional text to provide detailed information.
   * Required: false
   * string[0..512]
   * 0..1
   */
  @IsOptional()
  @MaxLength(512)
  @IsString()
  public additionalInfo!: string
}
