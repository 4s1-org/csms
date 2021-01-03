// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { ApnDto } from './apn.dto'
import { CustomDataDto } from './custom-data.dto'
import { OcppInterfaceEnum } from '../enumerations/ocpp-interface.enum'
import { OcppTransportEnum } from '../enumerations/ocpp-transport.enum'
import { OcppVersionEnum } from '../enumerations/ocpp-version.enum'
import { VpnDto } from './vpn.dto'

/**
 * Communication_ Function
 * urn:x-oca:ocpp:uid:2:233304
 * The NetworkConnectionProfile defines the functional and technical parameters of a communication link.
 */
export class NetworkConnectionProfileDto {
  public constructor(
    ocppVersion: OcppVersionEnum,
    ocppTransport: OcppTransportEnum,
    ocppCsmsUrl: string,
    messageTimeout: number,
    securityProfile: number,
    ocppInterface: OcppInterfaceEnum,
  ) {
    this.ocppVersion = ocppVersion
    this.ocppTransport = ocppTransport
    this.ocppCsmsUrl = ocppCsmsUrl
    this.messageTimeout = messageTimeout
    this.securityProfile = securityProfile
    this.ocppInterface = ocppInterface
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public apn!: ApnDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(OcppVersionEnum)
  public ocppVersion: OcppVersionEnum

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(OcppTransportEnum)
  public ocppTransport: OcppTransportEnum

  /**
   * Communication_ Function. OCPP_ Central_ System_ URL. URI
   * urn:x-oca:ocpp:uid:1:569357
   * URL of the CSMS(s) that this Charging Station  communicates with.
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(512)
  @IsString()
  public ocppCsmsUrl: string

  /**
   * Duration in seconds before a message send by the Charging Station via this network connection times-out.
   * The best setting depends on the underlying network and response times of the CSMS.
   * If you are looking for a some guideline: use 30 seconds as a starting point.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public messageTimeout: number

  /**
   * This field specifies the security profile used when connecting to the CSMS with this NetworkConnectionProfile.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public securityProfile: number

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(OcppInterfaceEnum)
  public ocppInterface: OcppInterfaceEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public vpn!: VpnDto
}
