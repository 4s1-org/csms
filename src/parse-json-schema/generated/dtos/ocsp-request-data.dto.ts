// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsString, IsEnum, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { HashAlgorithmEnum } from '../enums/hash-algorithm.enum'

export class OCSPRequestDataDto {
  public constructor (
    hashAlgorithm: HashAlgorithmEnum,
    issuerNameHash: string,
    issuerKeyHash: string,
    serialNumber: string,
    responderURL: string
  ) {
    this.hashAlgorithm = hashAlgorithm
    this.issuerNameHash = issuerNameHash
    this.issuerKeyHash = issuerKeyHash
    this.serialNumber = serialNumber
    this.responderURL = responderURL
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
  @Length(0, 128)
  @IsString()
  public issuerNameHash: string

  /**
   * Hashed value of the issuers public key
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 128)
  @IsString()
  public issuerKeyHash: string

  /**
   * The serial number of the certificate.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 40)
  @IsString()
  public serialNumber: string

  /**
   * This contains the responder URL (Case insensitive).
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 512)
  @IsString()
  public responderURL: string
}
