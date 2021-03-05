// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { RequestBaseDto } from '../generated/request-base.dto'
import { CustomDataDto } from '../datatypes/custom-data.dto'
import { EvseDto } from '../datatypes/evse.dto'
import { MessageTriggerEnum } from '../enumerations/message-trigger.enum'

export class TriggerMessageRequestDto extends RequestBaseDto {
  @Exclude()
  private _className: "TriggerMessageRequestDto" = "TriggerMessageRequestDto"

  public constructor(
    requestedMessage: MessageTriggerEnum,
  ) {
    super()
    this.requestedMessage = requestedMessage
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => EvseDto)
  public evse!: EvseDto

  public requestedMessage: MessageTriggerEnum
}
