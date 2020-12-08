import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { StatusInfoDto } from './status-info.dto'
import { SetMonitoringStatusEnumDto } from './set-monitoring-status-enum.dto'
import { MonitorEnumDto } from './monitor-enum.dto'
import { ComponentDto } from './component.dto'
import { VariableDto } from './variable.dto'

/**
 * Class to hold result of SetVariableMonitoring request.
 */
export class SetMonitoringResultDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public id: number

  @IsOptional()
  @ApiProperty()
  public statusInfo: StatusInfoDto

  @ApiProperty()
  public status: SetMonitoringStatusEnumDto

  @ApiProperty()
  public type: MonitorEnumDto

  @ApiProperty()
  public component: ComponentDto

  @ApiProperty()
  public variable: VariableDto

  @ApiProperty()
  public severity: number
}
