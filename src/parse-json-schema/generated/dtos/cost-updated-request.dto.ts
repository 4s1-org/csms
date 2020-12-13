// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsNumber, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class CostUpdatedRequestDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  public totalCost!: number

  /**
   * Transaction Id of the transaction the current cost are asked for.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 36)
  @IsString()
  public transactionId!: string
}
