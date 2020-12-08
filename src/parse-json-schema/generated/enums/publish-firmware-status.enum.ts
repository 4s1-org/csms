export enum PublishFirmwareStatusEnum {
  Idle,
  DownloadScheduled,
  Downloading,
  Downloaded,
  Published,
  DownloadFailed,
  DownloadPaused,
  InvalidChecksum,
  ChecksumVerified,
  PublishFailed,
}
