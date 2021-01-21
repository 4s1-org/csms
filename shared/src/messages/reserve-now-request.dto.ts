// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ConnectorEnum } from '../enumerations/connector.enum'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { IdTokenDto } from '../datatypes/id-token.dto'

export class ReserveNowRequestDto extends RequestBaseDto {
  public constructor(
    id: number,
    expiryDateTime: string,
    idToken: IdTokenDto,
  ) {
    super()
    this.id = id
    this.expiryDateTime = expiryDateTime
    this.idToken = idToken
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Id of reservation.
   */
  public id: number

  /**
   * Date and time at which the reservation expires.
   */
  public expiryDateTime: string

  public connectorType!: ConnectorEnum

  @Type(() => IdTokenDto)
  public idToken: IdTokenDto

  /**
   * This contains ID of the evse to be reserved.
   */
  public evseId!: number

  @Type(() => IdTokenDto)
  public groupIdToken!: IdTokenDto
}
