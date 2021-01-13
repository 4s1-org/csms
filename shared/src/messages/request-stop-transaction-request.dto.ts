// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class RequestStopTransactionRequestDto implements IRequestMessage {
  public constructor(
    transactionId: string,
  ) {
    this.transactionId = transactionId
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * The identifier of the transaction which the Charging Station is requested to stop.
   */
  @IsNotEmpty()
  @MaxLength(36)
  @IsString()
  public transactionId: string
}
