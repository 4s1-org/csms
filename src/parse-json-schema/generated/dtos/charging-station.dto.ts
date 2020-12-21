// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ModemDto } from './modem.dto'

/**
 * Charge_ Point
 * urn:x-oca:ocpp:uid:2:233122
 * The physical system where an Electrical Vehicle (EV) can be charged.
 */
export class ChargingStationDto {
  public constructor(
    model: string,
    vendorName: string,
  ) {
    this.model = model
    this.vendorName = vendorName
  }

  @ApiProperty()
  @IsOptional()
  public customData!: CustomDataDto

  /**
   * Device. Serial_ Number. Serial_ Number
   * urn:x-oca:ocpp:uid:1:569324
   * Vendor-specific device identifier.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 25)
  public serialNumber!: string

  /**
   * Device. Model. CI20_ Text
   * urn:x-oca:ocpp:uid:1:569325
   * Defines the model of the device.
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 20)
  public model: string

  @ApiProperty()
  @IsOptional()
  public modem!: ModemDto

  /**
   * Identifies the vendor (not necessarily in a unique manner).
   */
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(0, 50)
  public vendorName: string

  /**
   * This contains the firmware version of the Charging Station.
   */
  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(0, 50)
  public firmwareVersion!: string
}
