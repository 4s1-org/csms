// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class GetTransactionStatusRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  /**
   * The Id of the transaction for which the status is requested.
   */
  @IsOptional()
  @Length(0, 36)
  @ApiProperty()
  public transactionId: string
}
