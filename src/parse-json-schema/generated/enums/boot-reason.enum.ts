/**
 * This contains the reason for sending this message to the CSMS.
 */
export enum BootReasonEnum {
  ApplicationReset,
  FirmwareUpdate,
  LocalReset,
  PowerUp,
  RemoteReset,
  ScheduledReset,
  Triggered,
  Unknown,
  Watchdog,
}
