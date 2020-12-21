// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { HashAlgorithmEnum } from '../enums/hash-algorithm.enum'

export class CertificateHashDataDto {
  public constructor(
    hashAlgorithm: HashAlgorithmEnum,
    issuerNameHash: string,
    issuerKeyHash: string,
    serialNumber: string,
  ) {
    this.hashAlgorithm = hashAlgorithm
    this.issuerNameHash = issuerNameHash
    this.issuerKeyHash = issuerKeyHash
    this.serialNumber = serialNumber
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(HashAlgorithmEnum)
  public hashAlgorithm: HashAlgorithmEnum

  /**
   * Hashed value of the Issuer DN (Distinguished Name).
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 128)
  public issuerNameHash: string

  /**
   * Hashed value of the issuers public key
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 128)
  public issuerKeyHash: string

  /**
   * The serial number of the certificate.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 40)
  public serialNumber: string
}
