// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

/**
 * Status in response to UnlockConnectorRequest.
 */
export enum UnlockStatusEnum {
  /** Connector has successfully been unlocked. */
  Unlocked = "Unlocked",
  /** Failed to unlock the connector. */
  UnlockFailed = "UnlockFailed",
  /** The connector is not unlocked, because there is still an authorized transaction ongoing. */
  OngoingAuthorizedTransaction = "OngoingAuthorizedTransaction",
  /** The specified connector is not known by the Charging Station. */
  UnknownConnector = "UnknownConnector",
}