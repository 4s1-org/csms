/**
 * ID_ Token. Status. Authorization_ Status
urn:x-oca:ocpp:uid:1:569372
Current status of the ID Token.
 */
export enum AuthorizationStatusEnum {
  Accepted,
  Blocked,
  ConcurrentTx,
  Expired,
  Invalid,
  NoCredit,
  NotAllowedTypeEVSE,
  NotAtThisLocation,
  NotAtThisTime,
  Unknown,
}
