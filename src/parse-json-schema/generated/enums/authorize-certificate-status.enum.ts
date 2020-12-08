/**
 * Certificate status information. 
- if all certificates are valid: return 'Accepted'.
- if one of the certificates was revoked, return 'CertificateRevoked'.
 */
export enum AuthorizeCertificateStatusEnum {
  Accepted = "Accepted",
  SignatureError = "SignatureError",
  CertificateExpired = "CertificateExpired",
  CertificateRevoked = "CertificateRevoked",
  NoCertificateAvailable = "NoCertificateAvailable",
  CertChainError = "CertChainError",
  ContractCancelled = "ContractCancelled",
}