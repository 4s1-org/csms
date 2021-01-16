// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { MessageInfoDto } from '../datatypes/message-info.dto'

export class SetDisplayMessageRequestDto extends RequestBaseDto {
  public constructor(
    message: MessageInfoDto,
  ) {
    super()
    this.message = message
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => MessageInfoDto)
  public message: MessageInfoDto
}
