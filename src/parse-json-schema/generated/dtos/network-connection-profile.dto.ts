// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, Length } from 'class-validator'
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
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public apn!: APNDto

  @IsNotEmpty()
  @ApiProperty()
  public ocppVersion!: OCPPVersionEnum

  @IsNotEmpty()
  @ApiProperty()
  public ocppTransport!: OCPPTransportEnum

  /**
   * Communication_ Function. OCPP_ Central_ System_ URL. URI
urn:x-oca:ocpp:uid:1:569357
URL of the CSMS(s) that this Charging Station  communicates with.
   */
  @IsNotEmpty()
  @Length(0, 512)
  @ApiProperty()
  public ocppCsmsUrl!: string

  @IsNotEmpty()
  @ApiProperty()
  public messageTimeout!: number

  @IsNotEmpty()
  @ApiProperty()
  public securityProfile!: number

  @IsNotEmpty()
  @ApiProperty()
  public ocppInterface!: OCPPInterfaceEnum

  @IsOptional()
  @ApiProperty()
  public vpn!: VPNDto
}
