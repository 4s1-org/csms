/**
 * This contains the progress status of the publishfirmware
installation.
 */
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
