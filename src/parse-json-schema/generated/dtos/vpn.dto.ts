// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { VPNEnum } from '../enums/vpn.enum'

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
  public customData!: CustomDataDto

  /**
   * VPN. Server. URI
   * urn:x-oca:ocpp:uid:1:569272
   * VPN Server Address
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 512)
  public server: string

  /**
   * VPN. User. User_ Name
   * urn:x-oca:ocpp:uid:1:569273
   * VPN User
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 20)
  public user: string

  /**
   * VPN. Group. Group_ Name
   * urn:x-oca:ocpp:uid:1:569274
   * VPN group.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 20)
  public group!: string

  /**
   * VPN. Password. Password
   * urn:x-oca:ocpp:uid:1:569275
   * VPN Password.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 20)
  public password: string

  /**
   * VPN. Key. VPN_ Key
   * urn:x-oca:ocpp:uid:1:569276
   * VPN shared secret.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 255)
  public key: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(VPNEnum)
  public type: VPNEnum
}
