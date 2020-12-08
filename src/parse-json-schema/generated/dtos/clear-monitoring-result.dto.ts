import { IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ClearMonitoringStatusEnumDto } from './clear-monitoring-status-enum.dto'
import { StatusInfoDto } from './status-info.dto'

export class ClearMonitoringResultDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @ApiProperty()
  public status: ClearMonitoringStatusEnumDto

  @ApiProperty()
  public id: number

  @IsOptional()
  @ApiProperty()
  public statusInfo: StatusInfoDto
}
