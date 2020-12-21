// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
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
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Device. Serial_ Number. Serial_ Number
   * urn:x-oca:ocpp:uid:1:569324
   * Vendor-specific device identifier.
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(25)
  @IsString()
  public serialNumber!: string

  /**
   * Device. Model. CI20_ Text
   * urn:x-oca:ocpp:uid:1:569325
   * Defines the model of the device.
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(20)
  @IsString()
  public model: string

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public modem!: ModemDto

  /**
   * Identifies the vendor (not necessarily in a unique manner).
   */
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(50)
  @IsString()
  public vendorName: string

  /**
   * This contains the firmware version of the Charging Station.
   */
  @ApiProperty()
  @IsOptional()
  @MaxLength(50)
  @IsString()
  public firmwareVersion!: string
}
