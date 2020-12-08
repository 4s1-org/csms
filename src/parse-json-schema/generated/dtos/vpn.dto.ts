import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { VPNEnumDto } from './vpn-enum.dto'

/**
 * VPN
urn:x-oca:ocpp:uid:2:233268
VPN Configuration settings
 */
export class VPNDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  /**
   * VPN. Server. URI
urn:x-oca:ocpp:uid:1:569272
VPN Server Address
   */
  @Length(0, 512)
  @ApiProperty()
  public server: string

  /**
   * VPN. User. User_ Name
urn:x-oca:ocpp:uid:1:569273
VPN User
   */
  @Length(0, 20)
  @ApiProperty()
  public user: string

  /**
   * VPN. Group. Group_ Name
urn:x-oca:ocpp:uid:1:569274
VPN group.
   */
  @IsOptional()
  @Length(0, 20)
  @ApiProperty()
  public group: string

  /**
   * VPN. Password. Password
urn:x-oca:ocpp:uid:1:569275
VPN Password.
   */
  @Length(0, 20)
  @ApiProperty()
  public password: string

  /**
   * VPN. Key. VPN_ Key
urn:x-oca:ocpp:uid:1:569276
VPN shared secret.
   */
  @Length(0, 255)
  @ApiProperty()
  public key: string

  @ApiProperty()
  public type: VPNEnumDto
}
