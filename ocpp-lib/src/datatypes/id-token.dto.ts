// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { AdditionalInfoDto } from './additional-info.dto'
import { CustomDataDto } from './custom-data.dto'
import { IdTokenEnum } from '../enumerations/id-token.enum'

/**
 * Contains a case insensitive identifier to use for the authorization and the type of authorization to support multiple forms of identifiers.
 */
export class IdTokenDto extends DatatypeBaseDto {
  private _className: "IdTokenDto" = "IdTokenDto"

  public constructor(
    idToken: string,
    type: IdTokenEnum,
  ) {
    super()
    this.idToken = idToken
    this.type = type
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => AdditionalInfoDto)
  public additionalInfo!: AdditionalInfoDto[]

  /**
   * IdToken is case insensitive. Might hold the hidden id of an RFID tag, but can for example also contain a UUID.
   */
  public idToken: string

  public type: IdTokenEnum
}
