/**
 * Certificate status information. 
- if all certificates are valid: return 'Accepted'.
- if one of the certificates was revoked, return 'CertificateRevoked'.
 */
export enum AuthorizeCertificateStatusEnum {
  Accepted,
  SignatureError,
  CertificateExpired,
  CertificateRevoked,
  NoCertificateAvailable,
  CertChainError,
  ContractCancelled,
}
