// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

/**
 * The state of the charging process.
 */
export enum ChargingStateEnum {
  /** The contactor of the Connector is closed and energy is flowing to between EVSE and EV. */
  Charging = "Charging",
  /** There is a connection between EV and EVSE, in case the protocol used between EV and the Charging Station can detect a connection, the protocol needs to detect this for the state to become active. The connection can either be wired or wireless. */
  EVConnected = "EVConnected",
  /** When the EV is connected to the EVSE and the EVSE is offering energy but the EV is not taking any energy. */
  SuspendedEV = "SuspendedEV",
  /** When the EV is connected to the EVSE but the EVSE is not offering energy to the EV, e.g. due to a smart charging restriction, local supply power constraints, or when charging has stopped because of the authorization status in the response to a transactionEventRequest indicating that charging is not allowed etc. */
  SuspendedEVSE = "SuspendedEVSE",
  /** There is no connection between EV and EVSE. */
  Idle = "Idle",
}