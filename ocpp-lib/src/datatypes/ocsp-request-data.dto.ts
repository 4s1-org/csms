// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Exclude, Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'
import { HashAlgorithmEnum } from '../enumerations/hash-algorithm.enum'

export class OcspRequestDataDto extends DatatypeBaseDto {
  @Exclude()
  private _className: 'OcspRequestDataDto' = 'OcspRequestDataDto'

  public constructor(
    hashAlgorithm: HashAlgorithmEnum,
    issuerNameHash: string,
    issuerKeyHash: string,
    serialNumber: string,
    responderURL: string,
  ) {
    super()
    this.hashAlgorithm = hashAlgorithm
    this.issuerNameHash = issuerNameHash
    this.issuerKeyHash = issuerKeyHash
    this.serialNumber = serialNumber
    this.responderURL = responderURL
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  public hashAlgorithm: HashAlgorithmEnum

  /**
   * Hashed value of the Issuer DN (Distinguished Name).
   */
  public issuerNameHash: string

  /**
   * Hashed value of the issuers public key
   */
  public issuerKeyHash: string

  /**
   * The serial number of the certificate.
   */
  public serialNumber: string

  /**
   * This contains the responder URL (Case insensitive).
   */
  public responderURL: string
}
