// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, IsInt, IsString, IsEnum, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { APNDto } from './apn.dto'
import { OCPPVersionEnum } from '../enums/ocpp-version.enum'
import { OCPPTransportEnum } from '../enums/ocpp-transport.enum'
import { OCPPInterfaceEnum } from '../enums/ocpp-interface.enum'
import { VPNDto } from './vpn.dto'

/**
 * Communication_ Function
urn:x-oca:ocpp:uid:2:233304
The NetworkConnectionProfile defines the functional and technical parameters of a communication link.
 */
export class NetworkConnectionProfileDto {
  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsOptional()
  public apn!: APNDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(OCPPVersionEnum)
  public ocppVersion!: OCPPVersionEnum

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(OCPPTransportEnum)
  public ocppTransport!: OCPPTransportEnum

  /**
   * Communication_ Function. OCPP_ Central_ System_ URL. URI
urn:x-oca:ocpp:uid:1:569357
URL of the CSMS(s) that this Charging Station  communicates with.
   */
  @ApiProperty()
  @IsNotEmpty()
  @Length(0, 512)
  @IsString()
  public ocppCsmsUrl!: string

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public messageTimeout!: number

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  public securityProfile!: number

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(OCPPInterfaceEnum)
  public ocppInterface!: OCPPInterfaceEnum

  @ApiProperty()
  @IsOptional()
  public vpn!: VPNDto
}
