// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

export class NotifyDisplayMessagesRequestDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public messageInfo!: any

  @IsNotEmpty()
  @ApiProperty()
  public requestId!: number

  @IsOptional()
  @ApiProperty()
  public tbc!: boolean
}
