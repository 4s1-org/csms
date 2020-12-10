// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { IdTokenInfoDto } from './id-token-info.dto'
import { MessageContentDto } from './message-content.dto'

export class TransactionEventResponseDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public totalCost: number

  @IsOptional()
  @ApiProperty()
  public chargingPriority: number

  @IsOptional()
  @ApiProperty()
  public idTokenInfo: IdTokenInfoDto

  @IsOptional()
  @ApiProperty()
  public updatedPersonalMessage: MessageContentDto
}
