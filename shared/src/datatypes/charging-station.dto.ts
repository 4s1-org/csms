// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { IsNotEmpty, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator'
import { DatatypeBaseDto } from '../generated/datatype-base.dto'
import { CustomDataDto } from './custom-data.dto'
import { ModemDto } from './modem.dto'

/**
 * The physical system where an Electrical Vehicle (EV) can be charged.
 */
export class ChargingStationDto extends DatatypeBaseDto {
  public constructor(
    model: string,
    vendorName: string,
  ) {
    super()
    this.model = model
    this.vendorName = vendorName
  }

  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  /**
   * Vendor-specific device identifier.
   * Required: false
   * string[0..25]
   * 0..1
   */
  @IsOptional()
  @MaxLength(25)
  @IsString()
  public serialNumber!: string

  /**
   * Defines the model of the device.
   * Required: true
   * string[0..20]
   * 1..1
   */
  @IsNotEmpty()
  @MaxLength(20)
  @IsString()
  public model: string

  /**
   * Defines the functional parameters of a communication link.
   * Required: false
   * ModemType
   * 0..1
   */
  @IsOptional()
  @ValidateNested()
  public modem!: ModemDto

  /**
   * Identifies the vendor (not necessarily in a unique manner).
   * Required: true
   * string[0..50]
   * 1..1
   */
  @IsNotEmpty()
  @MaxLength(50)
  @IsString()
  public vendorName: string

  /**
   * This contains the firmware version of the Charging Station.
   * Required: false
   * string[0..50]
   * 0..1
   */
  @IsOptional()
  @MaxLength(50)
  @IsString()
  public firmwareVersion!: string
}
