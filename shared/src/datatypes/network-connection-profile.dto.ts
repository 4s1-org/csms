// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { Type } from 'class-transformer'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
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
export class NetworkConnectionProfileDto extends DatatypeBaseDto {
  public constructor(
    ocppVersion: OcppVersionEnum,
    ocppTransport: OcppTransportEnum,
    ocppCsmsUrl: string,
    messageTimeout: number,
    securityProfile: number,
    ocppInterface: OcppInterfaceEnum,
  ) {
    super()
    this.ocppVersion = ocppVersion
    this.ocppTransport = ocppTransport
    this.ocppCsmsUrl = ocppCsmsUrl
    this.messageTimeout = messageTimeout
    this.securityProfile = securityProfile
    this.ocppInterface = ocppInterface
  }

  @Type(() => CustomDataDto)
  public customData!: CustomDataDto

  @Type(() => ApnDto)
  public apn!: ApnDto

  public ocppVersion: OcppVersionEnum

  public ocppTransport: OcppTransportEnum

  /**
   * Communication_ Function. OCPP_ Central_ System_ URL. URI
   * urn:x-oca:ocpp:uid:1:569357
   * URL of the CSMS(s) that this Charging Station  communicates with.
   */
  public ocppCsmsUrl: string

  /**
   * Duration in seconds before a message send by the Charging Station via this network connection times-out.
   * The best setting depends on the underlying network and response times of the CSMS.
   * If you are looking for a some guideline: use 30 seconds as a starting point.
   */
  public messageTimeout: number

  /**
   * This field specifies the security profile used when connecting to the CSMS with this NetworkConnectionProfile.
   */
  public securityProfile: number

  public ocppInterface: OcppInterfaceEnum

  @Type(() => VpnDto)
  public vpn!: VpnDto
}
