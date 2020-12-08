/**
 * This contains the reason for sending this message to the CSMS.
 */
export enum BootReasonEnum {
  ApplicationReset = "ApplicationReset",
  FirmwareUpdate = "FirmwareUpdate",
  LocalReset = "LocalReset",
  PowerUp = "PowerUp",
  RemoteReset = "RemoteReset",
  ScheduledReset = "ScheduledReset",
  Triggered = "Triggered",
  Unknown = "Unknown",
  Watchdog = "Watchdog",
}