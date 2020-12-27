// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

/**
 * Indicates the type of the signed certificate that is returned. When omitted the certificate is used for both the 15118 connection (if implemented) and the Charging Station to CSMS connection. This field is required when a typeOfCertificate was included in the <<signcertificaterequest,SignCertificateRequest>> that requested this certificate to be signed AND both the 15118 connection and the Charging Station connection are implemented.
 */
export enum CertificateSigningUseEnum {
  ChargingStationCertificate = "ChargingStationCertificate",
  V2GCertificate = "V2GCertificate",
}