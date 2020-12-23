// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

/**
 * A status can be reported for the Connector of an EVSE of a Charging Station. States considered Operative are: Available, Reserved and Occupied. States considered Inoperative are: Unavailable, Faulted.
 */
export enum ConnectorStatusEnum {
  /** When a Connector becomes available for a new User (Operative) */
  Available = "Available",
  /** When a Connector becomes occupied, so it is not available for a new EV driver. (Operative) */
  Occupied = "Occupied",
  /** When a Connector becomes reserved as a result of ReserveNow command (Operative) */
  Reserved = "Reserved",
  /** When a Connector becomes unavailable as the result of a Change Availability command or an event upon which the Charging Station transitions to unavailable at its discretion. Upon receipt of ChangeAvailability message command, the status MAY change immediately or the change MAY be scheduled. When scheduled, StatusNotification SHALL be send when the availability change becomes effective (Inoperative) */
  Unavailable = "Unavailable",
  /** When a Connector (or the EVSE or the entire Charging Station it belongs to) has reported an error and is not available for energy delivery. (Inoperative). */
  Faulted = "Faulted",
}