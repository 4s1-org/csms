import { OcppMessage } from "src/ocpp-message"
import { JSONObject } from "./types"

export class OcppCallDto {
  constructor(
    public readonly messageTypeId: 2,
    public readonly messageId: string,
    public readonly action: OcppMessage,
    public readonly payload: JSONObject,
  ) {
    // nothing to do
  }
}