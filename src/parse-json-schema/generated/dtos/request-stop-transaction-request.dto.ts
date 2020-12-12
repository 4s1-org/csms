// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class RequestStopTransactionRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  /**
   * The identifier of the transaction which the Charging Station is requested to stop.
   */
  @IsNotEmpty()
  @Length(0, 36)
  @ApiProperty()
  public transactionId!: string
}
