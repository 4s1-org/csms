/**
 * Reason the Charging Station sends this message to the CSMS
 */
export enum TriggerReasonEnum {
  Authorized,
  CablePluggedIn,
  ChargingRateChanged,
  ChargingStateChanged,
  Deauthorized,
  EnergyLimitReached,
  EVCommunicationLost,
  EVConnectTimeout,
  MeterValueClock,
  MeterValuePeriodic,
  TimeLimitReached,
  Trigger,
  UnlockCommand,
  StopAuthorized,
  EVDeparted,
  EVDetected,
  RemoteStop,
  RemoteStart,
  AbnormalCondition,
  SignedDataReceived,
  ResetCommand,
}
