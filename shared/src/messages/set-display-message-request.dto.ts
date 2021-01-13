// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { IRequestMessage } from '../i-request-message'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { MessageInfoDto } from '../datatypes/message-info.dto'

export class SetDisplayMessageRequestDto implements IRequestMessage {
  public constructor(
    message: MessageInfoDto,
  ) {
    this.message = message
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ValidateNested()
  public message: MessageInfoDto
}
