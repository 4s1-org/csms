// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { APNDto } from './apn.dto'
import { CustomDataDto } from './custom-data.dto'
import { OCPPInterfaceEnum } from '../enums/ocpp-interface.enum'
import { OCPPTransportEnum } from '../enums/ocpp-transport.enum'
import { OCPPVersionEnum } from '../enums/ocpp-version.enum'
import { VPNDto } from './vpn.dto'

/**
 * Communication_ Function
 * urn:x-oca:ocpp:uid:2:233304
 * The NetworkConnectionProfile defines the functional and technical parameters of a communication link.
 */
export class NetworkConnectionProfileDto {
  public constructor(
    ocppVersion: OCPPVersionEnum,
    ocppTransport: OCPPTransportEnum,
    ocppCsmsUrl: string,
    messageTimeout: number,
    securityProfile: number,
    ocppInterface: OCPPInterfaceEnum,
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
  public apn!: APNDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(OCPPVersionEnum)
  public ocppVersion: OCPPVersionEnum

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(OCPPTransportEnum)
  public ocppTransport: OCPPTransportEnum

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
  @IsEnum(OCPPInterfaceEnum)
  public ocppInterface: OCPPInterfaceEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public vpn!: VPNDto
}
