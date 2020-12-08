/**
 * Transaction. Stopped_ Reason. EOT_ Reason_ Code
urn:x-oca:ocpp:uid:1:569413
This contains the reason why the transaction was stopped. MAY only be omitted when Reason is "Local".
 */
export enum ReasonEnum {
  DeAuthorized = "DeAuthorized",
  EmergencyStop = "EmergencyStop",
  EnergyLimitReached = "EnergyLimitReached",
  EVDisconnected = "EVDisconnected",
  GroundFault = "GroundFault",
  ImmediateReset = "ImmediateReset",
  Local = "Local",
  LocalOutOfCredit = "LocalOutOfCredit",
  MasterPass = "MasterPass",
  Other = "Other",
  OvercurrentFault = "OvercurrentFault",
  PowerLoss = "PowerLoss",
  PowerQuality = "PowerQuality",
  Reboot = "Reboot",
  Remote = "Remote",
  SOCLimitReached = "SOCLimitReached",
  StoppedByEV = "StoppedByEV",
  TimeLimitReached = "TimeLimitReached",
  Timeout = "Timeout",
}