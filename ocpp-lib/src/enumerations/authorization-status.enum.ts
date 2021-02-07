// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

/**
 * Status of an authorization response.
 */
export enum AuthorizationStatusEnum {
  /** Identifier is allowed for charging. */
  Accepted = "Accepted",
  /** Identifier has been blocked. Not allowed for charging. */
  Blocked = "Blocked",
  /** Identifier is already involved in another transaction and multiple transactions are not allowed. (Only relevant for the response to a transactionEventRequest(eventType=Started).) */
  ConcurrentTx = "ConcurrentTx",
  /** Identifier has expired. Not allowed for charging. */
  Expired = "Expired",
  /** Identifier is invalid. Not allowed for charging. */
  Invalid = "Invalid",
  /** Identifier is valid, but EV Driver doesn’t have enough credit to start charging. Not allowed for charging. */
  NoCredit = "NoCredit",
  /** Identifier is valid, but not allowed to charge at this type of EVSE. */
  NotAllowedTypeEVSE = "NotAllowedTypeEVSE",
  /** Identifier is valid, but not allowed to charge at this location. */
  NotAtThisLocation = "NotAtThisLocation",
  /** Identifier is valid, but not allowed to charge at this location at this time. */
  NotAtThisTime = "NotAtThisTime",
  /** Identifier is unknown. Not allowed for charging. */
  Unknown = "Unknown",
}