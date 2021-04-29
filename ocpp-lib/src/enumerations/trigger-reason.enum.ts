// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

/**
 * Reason that triggered a transactionEventRequest.
 */
export enum TriggerReasonEnum {
  /** Charging is authorized, by any means. Might be an RFID, or other authorization means. */
  Authorized = "Authorized",
  /** Cable is plugged in and EVDetected. */
  CablePluggedIn = "CablePluggedIn",
  /** Rate of charging changed by more than LimitChangeSignificance. */
  ChargingRateChanged = "ChargingRateChanged",
  /** Charging State changed. */
  ChargingStateChanged = "ChargingStateChanged",
  /** The transaction was stopped because of the authorization status in the response to a transactionEventRequest. */
  Deauthorized = "Deauthorized",
  /** Maximum energy of charging reached. For example: in a pre-paid charging solution */
  EnergyLimitReached = "EnergyLimitReached",
  /** Communication with EV lost, for example: cable disconnected. */
  EVCommunicationLost = "EVCommunicationLost",
  /** EV not connected before the connection is timed out. */
  EVConnectTimeout = "EVConnectTimeout",
  /** Needed to send a clock aligned meter value */
  MeterValueClock = "MeterValueClock",
  /** Needed to send a periodic meter value */
  MeterValuePeriodic = "MeterValuePeriodic",
  /** Maximum time of charging reached. For example: in a pre-paid charging solution */
  TimeLimitReached = "TimeLimitReached",
  /** Requested by the CSMS via a TriggerMessageRequest. */
  Trigger = "Trigger",
  /** CSMS sent an Unlock Connector command. */
  UnlockCommand = "UnlockCommand",
  /** An EV Driver has been authorized to stop charging. For example: By swiping an RFID card. */
  StopAuthorized = "StopAuthorized",
  /** EV departed. For example: When a departing EV triggers a parking bay detector. */
  EVDeparted = "EVDeparted",
  /** EV detected. For example: When an arriving EV triggers a parking bay detector. */
  EVDetected = "EVDetected",
  /** A RequestStopTransactionRequest has been sent. */
  RemoteStop = "RemoteStop",
  /** A RequestStartTransactionRequest has been sent. */
  RemoteStart = "RemoteStart",
  /** An Abnormal Error or Fault Condition has occurred. */
  AbnormalCondition = "AbnormalCondition",
  /** Signed data is received from the energy meter. */
  SignedDataReceived = "SignedDataReceived",
  /** CSMS sent a Reset Charging Station command. */
  ResetCommand = "ResetCommand",
}