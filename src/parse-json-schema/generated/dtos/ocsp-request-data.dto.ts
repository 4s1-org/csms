import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { HashAlgorithmEnumDto } from './hash-algorithm-enum.dto'

export class OCSPRequestDataDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public hashAlgorithm: HashAlgorithmEnumDto

  /**
   * Hashed value of the Issuer DN (Distinguished Name).
   */
  @Length(0, 128)
  @ApiProperty()
  public issuerNameHash: string

  /**
   * Hashed value of the issuers public key
   */
  @Length(0, 128)
  @ApiProperty()
  public issuerKeyHash: string

  /**
   * The serial number of the certificate.
   */
  @Length(0, 40)
  @ApiProperty()
  public serialNumber: string

  /**
   * This contains the responder URL (Case insensitive).
   */
  @Length(0, 512)
  @ApiProperty()
  public responderURL: string
}
