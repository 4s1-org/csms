/**
 * Indicates the type of certificate that is to be signed. When omitted the certificate is to be used for both the 15118 connection (if implemented) and the Charging Station to CSMS connection.
 */
export enum CertificateSigningUseEnum {
  ChargingStationCertificate = "ChargingStationCertificate",
  V2GCertificate = "V2GCertificate",
}