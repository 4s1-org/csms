// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class CostUpdatedRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public totalCost: number

  /**
   * Transaction Id of the transaction the current cost are asked for.
   */
  @Length(0, 36)
  @ApiProperty()
  public transactionId: string
}
