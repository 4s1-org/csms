// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class GetTransactionStatusRequestDto extends RequestBaseDto {
  public constructor() {
    super()
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * The Id of the transaction for which the status is requested.
   */
  @IsOptional()
  @MaxLength(36)
  @IsString()
  public transactionId!: string
}
