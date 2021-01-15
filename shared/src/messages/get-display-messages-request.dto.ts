// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ArrayMinSize, ArrayNotEmpty, IsArray, IsEnum, IsInt, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { MessagePriorityEnum } from '../enumerations/message-priority.enum'
import { MessageStateEnum } from '../enumerations/message-state.enum'

export class GetDisplayMessagesRequestDto extends RequestBaseDto {
  public constructor(
    requestId: number,
  ) {
    super()
    this.requestId = requestId
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * If provided the Charging Station shall return Display Messages of the given ids. This field SHALL NOT contain more ids than set in <<configkey-number-of-display-messages,NumberOfDisplayMessages.maxLimit>>
   */
  @IsOptional()
  @ArrayMinSize(1)
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  public id!: number[]

  /**
   * The Id of this request.
   */
  @IsNotEmpty()
  @IsInt()
  public requestId: number

  @IsOptional()
  @IsEnum(MessagePriorityEnum)
  public priority!: MessagePriorityEnum

  @IsOptional()
  @IsEnum(MessageStateEnum)
  public state!: MessageStateEnum
}
