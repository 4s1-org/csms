// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'

/**
 * Represent a signed version of the meter value.
 */
export class SignedMeterValueDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  /**
   * Base64 encoded, contains the signed data which might contain more then just the meter value. It can contain information like timestamps, reference to a customer etc.
   */
  @IsNotEmpty()
  @Length(0, 2500)
  @ApiProperty()
  public signedMeterData!: string

  /**
   * Method used to create the digital signature.
   */
  @IsNotEmpty()
  @Length(0, 50)
  @ApiProperty()
  public signingMethod!: string

  /**
   * Method used to encode the meter values before applying the digital signature algorithm.
   */
  @IsNotEmpty()
  @Length(0, 50)
  @ApiProperty()
  public encodingMethod!: string

  /**
   * Base64 encoded, sending depends on configuration variable _PublicKeyWithSignedMeterValue_.
   */
  @IsNotEmpty()
  @Length(0, 2500)
  @ApiProperty()
  public publicKey!: string
}
