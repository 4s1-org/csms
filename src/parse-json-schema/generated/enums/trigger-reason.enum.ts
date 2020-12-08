/**
 * Reason the Charging Station sends this message to the CSMS
 */
export enum TriggerReasonEnum {
  Authorized = "Authorized",
  CablePluggedIn = "CablePluggedIn",
  ChargingRateChanged = "ChargingRateChanged",
  ChargingStateChanged = "ChargingStateChanged",
  Deauthorized = "Deauthorized",
  EnergyLimitReached = "EnergyLimitReached",
  EVCommunicationLost = "EVCommunicationLost",
  EVConnectTimeout = "EVConnectTimeout",
  MeterValueClock = "MeterValueClock",
  MeterValuePeriodic = "MeterValuePeriodic",
  TimeLimitReached = "TimeLimitReached",
  Trigger = "Trigger",
  UnlockCommand = "UnlockCommand",
  StopAuthorized = "StopAuthorized",
  EVDeparted = "EVDeparted",
  EVDetected = "EVDetected",
  RemoteStop = "RemoteStop",
  RemoteStart = "RemoteStart",
  AbnormalCondition = "AbnormalCondition",
  SignedDataReceived = "SignedDataReceived",
  ResetCommand = "ResetCommand",
}