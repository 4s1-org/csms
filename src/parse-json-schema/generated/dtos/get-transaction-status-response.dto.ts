// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsBoolean } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class GetTransactionStatusResponseDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public ongoingIndicator!: boolean

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  public messagesInQueue!: boolean
}
