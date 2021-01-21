// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

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

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => MessageInfoDto)
  public message: MessageInfoDto
}
