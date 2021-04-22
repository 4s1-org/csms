// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'

/**
 * Element providing more information about the status.
 */
export class StatusInfoDto extends DatatypeBaseDto {
  @Exclude()
  private _className: 'StatusInfoDto' = 'StatusInfoDto'

  public constructor(
    reasonCode: string,
  ) {
    super()
    this.reasonCode = reasonCode
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * A predefined code for the reason why the status is returned in this response. The string is caseinsensitive.
   * Required: true
   * string[0..20]
   * 1..1
   */
  public reasonCode: string

  /**
   * Additional text to provide detailed information.
   * Required: false
   * string[0..512]
   * 0..1
   */
  public additionalInfo!: string
}
