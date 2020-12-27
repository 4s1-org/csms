// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../types/custom-data.dto'

export class CostUpdatedRequestDto {
  public constructor(
    totalCost: number,
    transactionId: string,
  ) {
    this.totalCost = totalCost
    this.transactionId = transactionId
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Current total cost, based on the information known by the CSMS, of the transaction including taxes. In the currency configured with the configuration Variable: [<<configkey-currency, Currency>>]
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  public totalCost: number

  /**
   * Transaction Id of the transaction the current cost are asked for.
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(36)
  @IsString()
  public transactionId: string
}
