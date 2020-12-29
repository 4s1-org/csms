import { JSONObject } from "./types"

export class OcppCallDto {
  constructor(
    public readonly messageTypeId: 2,
    public readonly messageId: string,
    public readonly action: string,
    public readonly payload: JSONObject,
  ) {
    // nothing to do
  }
}