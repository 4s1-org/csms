// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { MessageInfoDto } from '../datatypes/message-info.dto'

export class SetDisplayMessageRequestDto {
  public constructor(
    message: MessageInfoDto,
  ) {
    this.message = message
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  public message: MessageInfoDto
}
