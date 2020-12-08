import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { APNDto } from './apn.dto'
import { OCPPVersionEnumDto } from './ocpp-version-enum.dto'
import { OCPPTransportEnumDto } from './ocpp-transport-enum.dto'
import { OCPPInterfaceEnumDto } from './ocpp-interface-enum.dto'
import { VPNDto } from './vpn.dto'

/**
 * Communication_ Function
urn:x-oca:ocpp:uid:2:233304
The NetworkConnectionProfile defines the functional and technical parameters of a communication link.
 */
export class NetworkConnectionProfileDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public apn: APNDto

  @ApiProperty()
  public ocppVersion: OCPPVersionEnumDto

  @ApiProperty()
  public ocppTransport: OCPPTransportEnumDto

  /**
   * Communication_ Function. OCPP_ Central_ System_ URL. URI
urn:x-oca:ocpp:uid:1:569357
URL of the CSMS(s) that this Charging Station  communicates with.
   */
  @Length(0, 512)
  @ApiProperty()
  public ocppCsmsUrl: string

  @ApiProperty()
  public messageTimeout: number

  @ApiProperty()
  public securityProfile: number

  @ApiProperty()
  public ocppInterface: OCPPInterfaceEnumDto

  @IsOptional()
  @ApiProperty()
  public vpn: VPNDto
}
