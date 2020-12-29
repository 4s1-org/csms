import { JSONObject } from "./types"

export class OcppCallResultDto {
  constructor(
    public readonly messageTypeId: 3,
    public readonly messageId: string,
    public readonly payload: JSONObject,
  ) {
    // nothing to do
  }
}