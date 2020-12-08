/**
 * This indicates whether the Charging Station is able to display the message.
 */
export enum DisplayMessageStatusEnum {
  Accepted = "Accepted",
  NotSupportedMessageFormat = "NotSupportedMessageFormat",
  Rejected = "Rejected",
  NotSupportedPriority = "NotSupportedPriority",
  NotSupportedState = "NotSupportedState",
  UnknownTransaction = "UnknownTransaction",
}