/**
 * This indicates whether the Charging Station has unlocked the connector.
 */
export enum UnlockStatusEnum {
  Unlocked = "Unlocked",
  UnlockFailed = "UnlockFailed",
  OngoingAuthorizedTransaction = "OngoingAuthorizedTransaction",
  UnknownConnector = "UnknownConnector",
}