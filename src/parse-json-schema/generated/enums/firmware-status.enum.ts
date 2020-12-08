/**
 * This contains the progress status of the firmware installation.
 */
export enum FirmwareStatusEnum {
  Downloaded = "Downloaded",
  DownloadFailed = "DownloadFailed",
  Downloading = "Downloading",
  DownloadScheduled = "DownloadScheduled",
  DownloadPaused = "DownloadPaused",
  Idle = "Idle",
  InstallationFailed = "InstallationFailed",
  Installing = "Installing",
  Installed = "Installed",
  InstallRebooting = "InstallRebooting",
  InstallScheduled = "InstallScheduled",
  InstallVerificationFailed = "InstallVerificationFailed",
  InvalidSignature = "InvalidSignature",
  SignatureVerified = "SignatureVerified",
}