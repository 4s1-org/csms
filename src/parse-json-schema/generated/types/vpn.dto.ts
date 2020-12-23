// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { VPNEnum } from '../enumerations/vpn.enum'

/**
 * VPN
 * urn:x-oca:ocpp:uid:2:233268
 * VPN Configuration settings
 */
export class VPNDto {
  public constructor(
    server: string,
    user: string,
    password: string,
    key: string,
    type: VPNEnum,
  ) {
    this.server = server
    this.user = user
    this.password = password
    this.key = key
    this.type = type
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * VPN. Server. URI
   * urn:x-oca:ocpp:uid:1:569272
   * VPN Server Address
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(512)
  @IsString()
  public server: string

  /**
   * VPN. User. User_ Name
   * urn:x-oca:ocpp:uid:1:569273
   * VPN User
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(20)
  @IsString()
  public user: string

  /**
   * VPN. Group. Group_ Name
   * urn:x-oca:ocpp:uid:1:569274
   * VPN group.
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(20)
  @IsString()
  public group!: string

  /**
   * VPN. Password. Password
   * urn:x-oca:ocpp:uid:1:569275
   * VPN Password.
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(20)
  @IsString()
  public password: string

  /**
   * VPN. Key. VPN_ Key
   * urn:x-oca:ocpp:uid:1:569276
   * VPN shared secret.
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(255)
  @IsString()
  public key: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(VPNEnum)
  public type: VPNEnum
}
