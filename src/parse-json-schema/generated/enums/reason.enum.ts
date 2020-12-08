/**
 * Transaction. Stopped_ Reason. EOT_ Reason_ Code
urn:x-oca:ocpp:uid:1:569413
This contains the reason why the transaction was stopped. MAY only be omitted when Reason is "Local".
 */
export enum ReasonEnum {
  DeAuthorized,
  EmergencyStop,
  EnergyLimitReached,
  EVDisconnected,
  GroundFault,
  ImmediateReset,
  Local,
  LocalOutOfCredit,
  MasterPass,
  Other,
  OvercurrentFault,
  PowerLoss,
  PowerQuality,
  Reboot,
  Remote,
  SOCLimitReached,
  StoppedByEV,
  TimeLimitReached,
  Timeout,
}
