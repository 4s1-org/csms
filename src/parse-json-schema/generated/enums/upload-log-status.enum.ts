/**
 * This contains the status of the log upload.
 */
export enum UploadLogStatusEnum {
  BadMessage = "BadMessage",
  Idle = "Idle",
  NotSupportedOperation = "NotSupportedOperation",
  PermissionDenied = "PermissionDenied",
  Uploaded = "Uploaded",
  UploadFailure = "UploadFailure",
  Uploading = "Uploading",
  AcceptedCanceled = "AcceptedCanceled",
}