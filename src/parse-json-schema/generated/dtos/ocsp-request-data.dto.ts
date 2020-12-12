// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { HashAlgorithmEnum } from '../enums/hash-algorithm.enum'

export class OCSPRequestDataDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsNotEmpty()
  @ApiProperty()
  public hashAlgorithm!: HashAlgorithmEnum

  /**
   * Hashed value of the Issuer DN (Distinguished Name).
   */
  @IsNotEmpty()
  @Length(0, 128)
  @ApiProperty()
  public issuerNameHash!: string

  /**
   * Hashed value of the issuers public key
   */
  @IsNotEmpty()
  @Length(0, 128)
  @ApiProperty()
  public issuerKeyHash!: string

  /**
   * The serial number of the certificate.
   */
  @IsNotEmpty()
  @Length(0, 40)
  @ApiProperty()
  public serialNumber!: string

  /**
   * This contains the responder URL (Case insensitive).
   */
  @IsNotEmpty()
  @Length(0, 512)
  @ApiProperty()
  public responderURL!: string
}
