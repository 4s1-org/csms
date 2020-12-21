// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { APNAuthenticationEnum } from '../enums/apn-authentication.enum'

/**
 * APN
 * urn:x-oca:ocpp:uid:2:233134
 * Collection of configuration data needed to make a data-connection over a cellular network.
 * 
 * NOTE: When asking a GSM modem to dial in, it is possible to specify which mobile operator should be used. This can be done with the mobile country code (MCC) in combination with a mobile network code (MNC). Example: If your preferred network is Vodafone Netherlands, the MCC=204 and the MNC=04 which means the key PreferredNetwork = 20404 Some modems allows to specify a preferred network, which means, if this network is not available, a different network is used. If you specify UseOnlyPreferredNetwork and this network is not available, the modem will not dial in.
 */
export class APNDto {
  public constructor(
    apn: string,
    apnAuthentication: APNAuthenticationEnum,
  ) {
    this.apn = apn
    this.apnAuthentication = apnAuthentication
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * APN. APN. URI
   * urn:x-oca:ocpp:uid:1:568814
   * The Access Point Name as an URL.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 512)
  public apn: string

  /**
   * APN. APN. User_ Name
   * urn:x-oca:ocpp:uid:1:568818
   * APN username.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 20)
  public apnUserName!: string

  /**
   * APN. APN. Password
   * urn:x-oca:ocpp:uid:1:568819
   * APN Password.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 20)
  public apnPassword!: string

  /**
   * APN. SIMPIN. PIN_ Code
   * urn:x-oca:ocpp:uid:1:568821
   * SIM card pin code.
   */
  @ApiProperty()
  @IsOptional()
  @IsInt()
  public simPin!: number

  /**
   * APN. Preferred_ Network. Mobile_ Network_ ID
   * urn:x-oca:ocpp:uid:1:568822
   * Preferred network, written as MCC and MNC concatenated. See note.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 6)
  public preferredNetwork!: string

  /**
   * APN. Use_ Only_ Preferred_ Network. Indicator
   * urn:x-oca:ocpp:uid:1:568824
   * Default: false. Use only the preferred Network, do
   * not dial in when not available. See Note.
   */
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  public useOnlyPreferredNetwork!: boolean

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(APNAuthenticationEnum)
  public apnAuthentication: APNAuthenticationEnum
}
