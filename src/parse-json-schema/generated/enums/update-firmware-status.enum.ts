/**
 * This field indicates whether the Charging Station was able to accept the request.
 */
export enum UpdateFirmwareStatusEnum {
  Accepted = "Accepted",
  Rejected = "Rejected",
  AcceptedCanceled = "AcceptedCanceled",
  InvalidCertificate = "InvalidCertificate",
  RevokedCertificate = "RevokedCertificate",
}