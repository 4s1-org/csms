// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

/**
 * ---
 */
export enum BootReasonEnum {
  /** The Charging Station rebooted due to an application error. */
  ApplicationReset = "ApplicationReset",
  /** The Charging Station rebooted due to a firmware update. */
  FirmwareUpdate = "FirmwareUpdate",
  /** The Charging Station rebooted due to a local reset command. */
  LocalReset = "LocalReset",
  /** The Charging Station powered up and registers itself with the CSMS. */
  PowerUp = "PowerUp",
  /** The Charging Station rebooted due to a remote reset command. */
  RemoteReset = "RemoteReset",
  /** The Charging Station rebooted due to a scheduled reset command. */
  ScheduledReset = "ScheduledReset",
  /** Requested by the CSMS via a TriggerMessage */
  Triggered = "Triggered",
  /** The boot reason is unknown. */
  Unknown = "Unknown",
  /** The Charging Station rebooted due to an elapsed watchdog timer. */
  Watchdog = "Watchdog",
}