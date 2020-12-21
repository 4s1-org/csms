// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Represent a signed version of the meter value.
 */
export class SignedMeterValueDto {
  public constructor(
    signedMeterData: string,
    signingMethod: string,
    encodingMethod: string,
    publicKey: string
  ) {
    this.signedMeterData = signedMeterData
    this.signingMethod = signingMethod
    this.encodingMethod = encodingMethod
    this.publicKey = publicKey
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Base64 encoded, contains the signed data which might contain more then just the meter value. It can contain information like timestamps, reference to a customer etc.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 2500)
  @IsString()
  public signedMeterData: string

  /**
   * Method used to create the digital signature.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 50)
  @IsString()
  public signingMethod: string

  /**
   * Method used to encode the meter values before applying the digital signature algorithm.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 50)
  @IsString()
  public encodingMethod: string

  /**
   * Base64 encoded, sending depends on configuration variable _PublicKeyWithSignedMeterValue_.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 2500)
  @IsString()
  public publicKey: string
}
