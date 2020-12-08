import { IsOptional, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { CustomDataDto } from './custom-data.dto'
import { ComponentDto } from './component.dto'
import { MessagePriorityEnumDto } from './message-priority-enum.dto'
import { MessageStateEnumDto } from './message-state-enum.dto'
import { MessageContentDto } from './message-content.dto'

/**
 * Message_ Info
urn:x-enexis:ecdm:uid:2:233264
Contains message details, for a message to be displayed on a Charging Station.
 */
export class MessageInfoDto {
  @IsOptional()
  @ApiProperty()
  public customData: CustomDataDto

  @IsOptional()
  @ApiProperty()
  public display: ComponentDto

  @ApiProperty()
  public id: number

  @ApiProperty()
  public priority: MessagePriorityEnumDto

  @IsOptional()
  @ApiProperty()
  public state: MessageStateEnumDto

  /**
   * Message_ Info. Start. Date_ Time
urn:x-enexis:ecdm:uid:1:569256
From what date-time should this message be shown. If omitted: directly.
   */
  @IsOptional()
  @ApiProperty()
  public startDateTime: string

  /**
   * Message_ Info. End. Date_ Time
urn:x-enexis:ecdm:uid:1:569257
Until what date-time should this message be shown, after this date/time this message SHALL be removed.
   */
  @IsOptional()
  @ApiProperty()
  public endDateTime: string

  /**
   * During which transaction shall this message be shown.
Message SHALL be removed by the Charging Station after transaction has
ended.
   */
  @IsOptional()
  @Length(0, 36)
  @ApiProperty()
  public transactionId: string

  @ApiProperty()
  public message: MessageContentDto
}
