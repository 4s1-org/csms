// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'
import { HashAlgorithmEnum } from '../enumerations/hash-algorithm.enum'

export class OcspRequestDataDto extends DatatypeBaseDto {
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

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @IsNotEmpty()
  @IsEnum(HashAlgorithmEnum)
  public hashAlgorithm: HashAlgorithmEnum

  /**
   * Hashed value of the Issuer DN (Distinguished Name).
   */
  @IsNotEmpty()
  @MaxLength(128)
  @IsString()
  public issuerNameHash: string

  /**
   * Hashed value of the issuers public key
   */
  @IsNotEmpty()
  @MaxLength(128)
  @IsString()
  public issuerKeyHash: string

  /**
   * The serial number of the certificate.
   */
  @IsNotEmpty()
  @MaxLength(40)
  @IsString()
  public serialNumber: string

  /**
   * This contains the responder URL (Case insensitive).
   */
  @IsNotEmpty()
  @MaxLength(512)
  @IsString()
  public responderURL: string
}
