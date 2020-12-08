/**
 * Type of message to be triggered.
 */
export enum MessageTriggerEnum {
  BootNotification = "BootNotification",
  LogStatusNotification = "LogStatusNotification",
  FirmwareStatusNotification = "FirmwareStatusNotification",
  Heartbeat = "Heartbeat",
  MeterValues = "MeterValues",
  SignChargingStationCertificate = "SignChargingStationCertificate",
  SignV2GCertificate = "SignV2GCertificate",
  StatusNotification = "StatusNotification",
  TransactionEvent = "TransactionEvent",
  SignCombinedCertificate = "SignCombinedCertificate",
  PublishFirmwareStatusNotification = "PublishFirmwareStatusNotification",
}