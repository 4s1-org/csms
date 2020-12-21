/**
 * Message_ Info. State. Message_ State_ Code
 * urn:x-enexis:ecdm:uid:1:569254
 * During what state should this message be shown. When omitted this message should be shown in any state of the Charging Station.
 */
export enum MessageStateEnum {
  Charging = "Charging",
  Faulted = "Faulted",
  Idle = "Idle",
  Unavailable = "Unavailable",
}