// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class GetTransactionStatusRequestDto {
  public constructor() {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * The Id of the transaction for which the status is requested.
   */
  @ApiProperty()
  @IsOptional()
  @Length(0, 36)
  @IsString()
  public transactionId!: string
}
