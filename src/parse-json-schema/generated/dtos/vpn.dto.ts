// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { VPNEnum } from '../enums/vpn.enum'

/**
 * VPN
urn:x-oca:ocpp:uid:2:233268
VPN Configuration settings
 */
export class VPNDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * VPN. Server. URI
urn:x-oca:ocpp:uid:1:569272
VPN Server Address
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 512)
  @IsString()
  public server!: string

  /**
   * VPN. User. User_ Name
urn:x-oca:ocpp:uid:1:569273
VPN User
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 20)
  @IsString()
  public user!: string

  /**
   * VPN. Group. Group_ Name
urn:x-oca:ocpp:uid:1:569274
VPN group.
   */
  @ApiProperty()
  @IsOptional()
  @Length(0, 20)
  @IsString()
  public group!: string

  /**
   * VPN. Password. Password
urn:x-oca:ocpp:uid:1:569275
VPN Password.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 20)
  @IsString()
  public password!: string

  /**
   * VPN. Key. VPN_ Key
urn:x-oca:ocpp:uid:1:569276
VPN shared secret.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 255)
  @IsString()
  public key!: string

  @ApiProperty()
  @IsNotEmpty()
  public type!: VPNEnum
}
