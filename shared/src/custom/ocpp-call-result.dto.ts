import { OcppMessageTypeIdEnum } from "./ocpp-message-type-id.enum"
import { JSONObject } from "./types"

export class OcppCallResultDto {
  constructor(
    public readonly messageTypeId: OcppMessageTypeIdEnum.Result,
    public readonly messageId: string,
    public readonly payload?: JSONObject | any,
  ) {
    // nothing to do
  }
}
