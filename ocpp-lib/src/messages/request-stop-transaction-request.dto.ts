// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class RequestStopTransactionRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: "RequestStopTransactionRequestDto" = "RequestStopTransactionRequestDto"

  public constructor(
    transactionId: string,
  ) {
    super()
    this.transactionId = transactionId
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * The identifier of the transaction which the Charging Station is requested to stop.
   */
  public transactionId: string
}
