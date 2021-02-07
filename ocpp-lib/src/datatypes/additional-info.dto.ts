// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'

/**
 * Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.
 */
export class AdditionalInfoDto extends DatatypeBaseDto {
  public constructor(
    additionalIdToken: string,
    type: string,
  ) {
    super()
    this.additionalIdToken = additionalIdToken
    this.type = type
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * This field specifies the additional IdToken.
   */
  public additionalIdToken: string

  /**
   * This defines the type of the additionalIdToken. This is a custom type, so the implementation needs to be agreed upon by all involved parties.
   */
  public type: string
}
