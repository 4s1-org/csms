/**
 * Transaction. State. Transaction_ State_ Code
urn:x-oca:ocpp:uid:1:569419
Current charging state, is required when state
has changed.
 */
export enum ChargingStateEnum {
  Charging,
  EVConnected,
  SuspendedEV,
  SuspendedEVSE,
  Idle,
}
