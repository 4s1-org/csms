import { OcppErrorCodes } from "./ocpp-error-codes"
import { JSONObject } from "./types"

export class OcppCallErrorDto {
  constructor(
    public readonly messageTypeId: 4,
    public readonly messageId: string,
    public readonly errorCode: OcppErrorCodes,
    public readonly errorDescription: string,
    public readonly errorDetails: JSONObject | any,
  ) {
    // nothing to do
  }
}