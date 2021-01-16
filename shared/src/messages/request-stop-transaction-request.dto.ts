// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'

export class RequestStopTransactionRequestDto extends RequestBaseDto {
  public constructor(
    transactionId: string,
  ) {
    super()
    this.transactionId = transactionId
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * The identifier of the transaction which the Charging Station is requested to stop.
   */
  @IsNotEmpty()
  @MaxLength(36)
  @IsString()
  public transactionId: string
}
