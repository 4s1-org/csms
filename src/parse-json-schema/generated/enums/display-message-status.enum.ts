/**
 * This indicates whether the Charging Station is able to display the message.
 */
export enum DisplayMessageStatusEnum {
  Accepted,
  NotSupportedMessageFormat,
  Rejected,
  NotSupportedPriority,
  NotSupportedState,
  UnknownTransaction,
}
