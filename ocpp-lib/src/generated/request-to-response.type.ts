import { BootNotificationRequestDto } from '../messages/boot-notification-request.dto'
import { BootNotificationResponseDto } from '../messages/boot-notification-response.dto'
import { ChangeAvailabilityRequestDto } from '../messages/change-availability-request.dto'
import { ChangeAvailabilityResponseDto } from '../messages/change-availability-response.dto'
import { SetVariablesRequestDto } from '../messages/set-variables-request.dto'
import { SetVariablesResponseDto } from '../messages/set-variables-response.dto'
import { StatusNotificationRequestDto } from '../messages/status-notification-request.dto'
import { StatusNotificationResponseDto } from '../messages/status-notification-response.dto'

export type RequestToResponseType<T> = T extends BootNotificationRequestDto
  ? BootNotificationResponseDto
  : T extends StatusNotificationRequestDto
  ? StatusNotificationResponseDto
  : T extends SetVariablesRequestDto
  ? SetVariablesResponseDto
  : T extends ChangeAvailabilityRequestDto
  ? ChangeAvailabilityResponseDto
  : never
