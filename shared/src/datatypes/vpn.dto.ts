// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'
import { VpnEnum } from '../enumerations/vpn.enum'

/**
 * VPN
 * urn:x-oca:ocpp:uid:2:233268
 * VPN Configuration settings
 */
export class VpnDto extends DatatypeBaseDto {
  public constructor(
    server: string,
    user: string,
    password: string,
    key: string,
    type: VpnEnum,
  ) {
    super()
    this.server = server
    this.user = user
    this.password = password
    this.key = key
    this.type = type
  }

  @IsOptional()
  @ValidateNested()
  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  /**
   * VPN. Server. URI
   * urn:x-oca:ocpp:uid:1:569272
   * VPN Server Address
   */
  @IsNotEmpty()
  @MaxLength(512)
  @IsString()
  public server: string

  /**
   * VPN. User. User_ Name
   * urn:x-oca:ocpp:uid:1:569273
   * VPN User
   */
  @IsNotEmpty()
  @MaxLength(20)
  @IsString()
  public user: string

  /**
   * VPN. Group. Group_ Name
   * urn:x-oca:ocpp:uid:1:569274
   * VPN group.
   */
  @IsOptional()
  @MaxLength(20)
  @IsString()
  public group!: string

  /**
   * VPN. Password. Password
   * urn:x-oca:ocpp:uid:1:569275
   * VPN Password.
   */
  @IsNotEmpty()
  @MaxLength(20)
  @IsString()
  public password: string

  /**
   * VPN. Key. VPN_ Key
   * urn:x-oca:ocpp:uid:1:569276
   * VPN shared secret.
   */
  @IsNotEmpty()
  @MaxLength(255)
  @IsString()
  public key: string

  @IsNotEmpty()
  @IsEnum(VpnEnum)
  public type: VpnEnum
}
