// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'

/**
 * Defines parameters required for initiating and maintaining wireless communication with other devices.
 */
export class ModemDto extends DatatypeBaseDto {
  @Exclude()
  private _className: 'ModemDto' = 'ModemDto'

  public constructor() {
    super()
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * This contains the ICCID of the modem’s SIM card.
   * Required: false
   * identifierString[0..20]
   * 0..1
   */
  public iccid!: string

  /**
   * This contains the IMSI of the modem’s SIM card.
   * Required: false
   * identifierString[0..20]
   * 0..1
   */
  public imsi!: string
}
