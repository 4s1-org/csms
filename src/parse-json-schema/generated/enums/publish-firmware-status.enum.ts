/**
 * This contains the progress status of the publishfirmware
 * installation.
 */
export enum PublishFirmwareStatusEnum {
  Idle = "Idle",
  DownloadScheduled = "DownloadScheduled",
  Downloading = "Downloading",
  Downloaded = "Downloaded",
  Published = "Published",
  DownloadFailed = "DownloadFailed",
  DownloadPaused = "DownloadPaused",
  InvalidChecksum = "InvalidChecksum",
  ChecksumVerified = "ChecksumVerified",
  PublishFailed = "PublishFailed",
}