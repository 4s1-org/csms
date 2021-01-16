// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'

/**
 * Represent a signed version of the meter value.
 */
export class SignedMeterValueDto extends DatatypeBaseDto {
  public constructor(
    signedMeterData: string,
    signingMethod: string,
    encodingMethod: string,
    publicKey: string,
  ) {
    super()
    this.signedMeterData = signedMeterData
    this.signingMethod = signingMethod
    this.encodingMethod = encodingMethod
    this.publicKey = publicKey
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * Base64 encoded, contains the signed data which might contain more then just the meter value. It can contain information like timestamps, reference to a customer etc.
   */
  @IsNotEmpty()
  @MaxLength(2500)
  @IsString()
  public signedMeterData: string

  /**
   * Method used to create the digital signature.
   */
  @IsNotEmpty()
  @MaxLength(50)
  @IsString()
  public signingMethod: string

  /**
   * Method used to encode the meter values before applying the digital signature algorithm.
   */
  @IsNotEmpty()
  @MaxLength(50)
  @IsString()
  public encodingMethod: string

  /**
   * Base64 encoded, sending depends on configuration variable _PublicKeyWithSignedMeterValue_.
   */
  @IsNotEmpty()
  @MaxLength(2500)
  @IsString()
  public publicKey: string
}
