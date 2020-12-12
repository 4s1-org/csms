// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { VPNEnum } from '../enums/vpn.enum'

/**
 * VPN
urn:x-oca:ocpp:uid:2:233268
VPN Configuration settings
 */
export class VPNDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  /**
   * VPN. Server. URI
urn:x-oca:ocpp:uid:1:569272
VPN Server Address
   */
  @IsNotEmpty()
  @Length(0, 512)
  @ApiProperty()
  public server!: string

  /**
   * VPN. User. User_ Name
urn:x-oca:ocpp:uid:1:569273
VPN User
   */
  @IsNotEmpty()
  @Length(0, 20)
  @ApiProperty()
  public user!: string

  /**
   * VPN. Group. Group_ Name
urn:x-oca:ocpp:uid:1:569274
VPN group.
   */
  @IsOptional()
  @Length(0, 20)
  @ApiProperty()
  public group!: string

  /**
   * VPN. Password. Password
urn:x-oca:ocpp:uid:1:569275
VPN Password.
   */
  @IsNotEmpty()
  @Length(0, 20)
  @ApiProperty()
  public password!: string

  /**
   * VPN. Key. VPN_ Key
urn:x-oca:ocpp:uid:1:569276
VPN shared secret.
   */
  @IsNotEmpty()
  @Length(0, 255)
  @ApiProperty()
  public key!: string

  @IsNotEmpty()
  @ApiProperty()
  public type!: VPNEnum
}
