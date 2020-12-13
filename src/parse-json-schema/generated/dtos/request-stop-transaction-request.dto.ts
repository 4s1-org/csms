// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class RequestStopTransactionRequestDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * The identifier of the transaction which the Charging Station is requested to stop.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 36)
  @IsString()
  public transactionId!: string
}
