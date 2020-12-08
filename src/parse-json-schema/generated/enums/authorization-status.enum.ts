/**
 * ID_ Token. Status. Authorization_ Status
urn:x-oca:ocpp:uid:1:569372
Current status of the ID Token.
 */
export enum AuthorizationStatusEnum {
  Accepted = "Accepted",
  Blocked = "Blocked",
  ConcurrentTx = "ConcurrentTx",
  Expired = "Expired",
  Invalid = "Invalid",
  NoCredit = "NoCredit",
  NotAllowedTypeEVSE = "NotAllowedTypeEVSE",
  NotAtThisLocation = "NotAtThisLocation",
  NotAtThisTime = "NotAtThisTime",
  Unknown = "Unknown",
}