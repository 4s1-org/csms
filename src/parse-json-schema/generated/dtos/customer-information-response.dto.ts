// THIS FILE IS AUTO-GENERATED. DO NOT CHANGE IT!

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { CustomDataDto } from './custom-data.dto'
import { CustomerInformationStatusEnum } from '../enums/customer-information-status.enum'
import { StatusInfoDto } from './status-info.dto'

export class CustomerInformationResponseDto {
  public constructor(
    status: CustomerInformationStatusEnum,
  ) {
    this.status = status
  }

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public customData!: CustomDataDto

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(CustomerInformationStatusEnum)
  public status: CustomerInformationStatusEnum

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  public statusInfo!: StatusInfoDto
}
