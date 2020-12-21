// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'

export class RequestStopTransactionRequestDto {
  public constructor(
    transactionId: string,
  ) {
    this.transactionId = transactionId
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * The identifier of the transaction which the Charging Station is requested to stop.
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(36)
  @IsString()
  public transactionId: string
}
