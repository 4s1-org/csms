import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { MonitorEnumDto } from './monitor-enum.dto'

/**
 * A monitoring setting for a variable.
 */
export class VariableMonitoringDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public id: number

  @ApiProperty()
  public transaction: boolean

  @ApiProperty()
  public value: number

  @ApiProperty()
  public type: MonitorEnumDto

  @ApiProperty()
  public severity: number
}
