// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString, Length } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'

export class GetTransactionStatusRequestDto {

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * The Id of the transaction for which the status is requested.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 36)
  public transactionId!: string
}
