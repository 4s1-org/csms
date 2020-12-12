// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class CostUpdatedRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public totalCost!: number

  /**
   * Transaction Id of the transaction the current cost are asked for.
   */
  @IsNotEmpty()
  @Length(0, 36)
  @ApiProperty()
  public transactionId!: string
}
