import { OcppErrorCodes } from "./ocpp-error-codes"
import { OcppMessageTypeIdEnum } from "./ocpp-message-type-id.enum"
import { JSONObject } from "./types"

export class OcppCallErrorDto {
  constructor(
    public readonly messageTypeId: OcppMessageTypeIdEnum.Error,
    public readonly messageId: string,
    public readonly errorCode: OcppErrorCodes,
    public readonly errorDescription: string,
    public readonly errorDetails: JSONObject | any,
  ) {
    // nothing to do
  }
}
