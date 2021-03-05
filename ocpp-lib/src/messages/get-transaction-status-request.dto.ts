// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class GetTransactionStatusRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: "GetTransactionStatusRequestDto" = "GetTransactionStatusRequestDto"

  public constructor() {
    super()
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * The Id of the transaction for which the status is requested.
   */
  public transactionId!: string
}
