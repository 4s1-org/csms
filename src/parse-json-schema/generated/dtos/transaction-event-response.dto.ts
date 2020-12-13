// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsInt, IsNumber } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { IdTokenInfoDto } from './id-token-info.dto'
import { MessageContentDto } from './message-content.dto'

export class TransactionEventResponseDto {
  public constructor () {
    // nothing to do
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  public totalCost!: number

  @ApiProperty()
  @IsOptional()
  @IsInt()
  public chargingPriority!: number

  @ApiProperty()
  @IsOptional()
  public idTokenInfo!: IdTokenInfoDto

  @ApiProperty()
  @IsOptional()
  public updatedPersonalMessage!: MessageContentDto
}
