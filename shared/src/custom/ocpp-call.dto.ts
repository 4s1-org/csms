import { OcppMessage } from "src/ocpp-message"
import { JSONObject } from "./types"

export class OcppCallDto {
  constructor(
    public readonly messageTypeId: 2,
    public readonly messageId: string,
    public readonly action: OcppMessage,
    public readonly payload: JSONObject | any,
  ) {
    // nothing to do
  }

  public toMessage(): [number, string, string, any] {
    return [this.messageTypeId, this.messageId, this.action, this.payload]
  }
}