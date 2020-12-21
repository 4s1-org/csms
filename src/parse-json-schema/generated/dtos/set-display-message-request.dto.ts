// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { MessageInfoDto } from './message-info.dto'

export class SetDisplayMessageRequestDto {
  public constructor(
    message: MessageInfoDto,
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
