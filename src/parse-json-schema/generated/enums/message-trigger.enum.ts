/**
 * Type of message to be triggered.
 */
export enum MessageTriggerEnum {
  BootNotification,
  LogStatusNotification,
  FirmwareStatusNotification,
  Heartbeat,
  MeterValues,
  SignChargingStationCertificate,
  SignV2GCertificate,
  StatusNotification,
  TransactionEvent,
  SignCombinedCertificate,
  PublishFirmwareStatusNotification,
}
