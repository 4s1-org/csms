/**
 * This contains the progress status of the firmware installation.
 */
export enum FirmwareStatusEnum {
  Downloaded,
  DownloadFailed,
  Downloading,
  DownloadScheduled,
  DownloadPaused,
  Idle,
  InstallationFailed,
  Installing,
  Installed,
  InstallRebooting,
  InstallScheduled,
  InstallVerificationFailed,
  InvalidSignature,
  SignatureVerified,
}
