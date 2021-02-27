import { OcppErrorMessageDto } from '../ocpp-messages/ocpp-error-message.dto'
import { OcppRequestMessageDto } from '../ocpp-messages/ocpp-request-message.dto'
import { OcppActionEnum } from '../generated/ocpp-action.enum'
import { ResponseBaseDto } from '../generated/response-base.dto'
import { Logger } from '@yellowgarbagebag/common-lib'
import { OcppResponseMessageDto } from './ocpp-response-message.dto'

export interface IChargingStation {
  logger: Logger

  incomingRequestMessage(msg: OcppRequestMessageDto): ResponseBaseDto
  incomingResponseMessage(msg: OcppResponseMessageDto): void
  incomingErrorMessage(msg: OcppErrorMessageDto): void

  getActionToRequest(messageId: string): OcppActionEnum

  addToSendList(msg: OcppRequestMessageDto): void
}
