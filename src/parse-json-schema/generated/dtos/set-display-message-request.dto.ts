// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { MessageInfoDto } from './message-info.dto'

export class SetDisplayMessageRequestDto {
  public constructor (
    message: MessageInfoDto
  ) {
    this.message = message
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  public message: MessageInfoDto
}
