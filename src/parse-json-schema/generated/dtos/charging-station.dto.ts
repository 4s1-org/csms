// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsOptional, IsNotEmpty, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ModemDto } from './modem.dto'

/**
 * Charge_ Point
urn:x-oca:ocpp:uid:2:233122
The physical system where an Electrical Vehicle (EV) can be charged.
 */
export class ChargingStationDto {
  @IsOptional()
  @ApiProperty()
  public customData!: CustomDataDto

  /**
   * Device. Serial_ Number. Serial_ Number
urn:x-oca:ocpp:uid:1:569324
Vendor-specific device identifier.
   */
  @IsOptional()
  @Length(0, 25)
  @ApiProperty()
  public serialNumber!: string

  /**
   * Device. Model. CI20_ Text
urn:x-oca:ocpp:uid:1:569325
Defines the model of the device.
   */
  @IsNotEmpty()
  @Length(0, 20)
  @ApiProperty()
  public model!: string

  @IsOptional()
  @ApiProperty()
  public modem!: ModemDto

  /**
   * Identifies the vendor (not necessarily in a unique manner).
   */
  @IsNotEmpty()
  @Length(0, 50)
  @ApiProperty()
  public vendorName!: string

  /**
   * This contains the firmware version of the Charging Station.
   */
  @IsOptional()
  @Length(0, 50)
  @ApiProperty()
  public firmwareVersion!: string
}
