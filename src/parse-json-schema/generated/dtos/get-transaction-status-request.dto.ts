// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'

export class GetTransactionStatusRequestDto {

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * The Id of the transaction for which the status is requested.
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(36)
  @IsString()
  public transactionId!: string
}
