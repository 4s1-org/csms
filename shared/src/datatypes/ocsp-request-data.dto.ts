// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { HashAlgorithmEnum } from '../enumerations/hash-algorithm.enum'

export class OcspRequestDataDto {
  public constructor(
    hashAlgorithm: HashAlgorithmEnum,
    issuerNameHash: string,
    issuerKeyHash: string,
    serialNumber: string,
    responderURL: string,
  ) {
    this.hashAlgorithm = hashAlgorithm
    this.issuerNameHash = issuerNameHash
    this.issuerKeyHash = issuerKeyHash
    this.serialNumber = serialNumber
    this.responderURL = responderURL
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
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
  @MaxLength(128)
  @IsString()
  public issuerNameHash: string

  /**
   * Hashed value of the issuers public key
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(128)
  @IsString()
  public issuerKeyHash: string

  /**
   * The serial number of the certificate.
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(40)
  @IsString()
  public serialNumber: string

  /**
   * This contains the responder URL (Case insensitive).
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(512)
  @IsString()
  public responderURL: string
}
