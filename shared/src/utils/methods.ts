import { plainToClass } from 'class-transformer'
import { OcppErrorCodeEnum } from '../callMessages/ocpp-error-code.enum'
import { OcppRequestMessageDto } from '../callMessages/ocpp-request-message.dto'
import { OcppErrorResponseMessageDto } from '../callMessages/ocpp-error-response-message.dto'
import { OcppMessageTypeIdEnum } from '../callMessages/ocpp-message-type-id.enum'
import { OcppMessageEnum } from '../generated/ocpp-message.enum'
import { OcppResponseMessageDto } from '../callMessages/ocpp-response-message.dto'
import { CsmsError } from './csms-error'
import { actionDtoMapping } from '../generated'
import { MessageValidator } from './messageValidator'
import { OcppBaseMessageDto } from '../callMessages/ocpp-base-message.dto'

export function requestPayloadHandler(call: OcppRequestMessageDto): void {
  MessageValidator.instance.validateRequestPayload(call.action, call.payload)

  const mapping = actionDtoMapping.find((x) => x.action === call.action)
  if (!mapping) {
    throw new CsmsError(OcppErrorCodeEnum.NotSupported, call.action)
  }
  call.payload = plainToClass(mapping.requestDto, call.payload)
}

export function responsePayloadHandler(call: OcppResponseMessageDto, action: OcppMessageEnum): void {
  MessageValidator.instance.validateResponsePayload(action, call.payload)

  const mapping = actionDtoMapping.find((x) => x.action === action)
  if (!mapping) {
    throw new CsmsError(OcppErrorCodeEnum.NotSupported, action)
  }
  call.payload = plainToClass(mapping.responseDto, call.payload)
}

export function arrayToMessageDto(data: unknown): OcppBaseMessageDto {
  if (!data) {
    throw new CsmsError(OcppErrorCodeEnum.RpcFrameworkError, 'Invalid data format received')
  }
  if (typeof data !== 'string') {
    throw new CsmsError(OcppErrorCodeEnum.RpcFrameworkError, 'Invalid data format received')
  }

  try {
    data = JSON.parse(data)
  } catch (err) {
    console.log(err)
    throw new CsmsError(OcppErrorCodeEnum.RpcFrameworkError, 'Invalid data format received')
  }

  if (!Array.isArray(data)) {
    throw new CsmsError(OcppErrorCodeEnum.RpcFrameworkError, 'No array received')
  }

  const messageTypeId = data[0]

  if (messageTypeId === OcppMessageTypeIdEnum.Call && data.length === 4) {
    const messageId = data[1]
    const action = data[2]
    const payload = data[3]

    if (messageId.length > 36) {
      throw new CsmsError(OcppErrorCodeEnum.RpcFrameworkError, 'MessageId is too long')
    }
    if (!Object.values(OcppMessageEnum).includes(action)) {
      throw new CsmsError(OcppErrorCodeEnum.NotImplemented)
    }
    if (!payload) {
      throw new CsmsError(OcppErrorCodeEnum.RpcFrameworkError, 'Wrong payload')
    }

    return plainToClass(OcppRequestMessageDto, { messageTypeId, messageId, action, payload })
  } else if (messageTypeId === OcppMessageTypeIdEnum.Result && data.length === 3) {
    const messageId = data[1]
    const payload = data[2]

    if (messageId.length > 36) {
      throw new CsmsError(OcppErrorCodeEnum.RpcFrameworkError, 'MessageId is too long')
    }
    if (!payload) {
      throw new CsmsError(OcppErrorCodeEnum.RpcFrameworkError, 'Wrong payload')
    }
    return plainToClass(OcppResponseMessageDto, { messageTypeId, messageId, payload })
  } else if (messageTypeId === OcppMessageTypeIdEnum.Error && data.length === 5) {
    const messageId = data[1]
    const errorCode = data[2]
    const errorDescription = data[2]
    const errorDetails = data[2]

    if (messageId.length > 36) {
      throw new CsmsError(OcppErrorCodeEnum.RpcFrameworkError, 'MessageId is too long')
    }
    if (!Object.values(OcppErrorCodeEnum).includes(errorCode)) {
      throw new CsmsError(OcppErrorCodeEnum.RpcFrameworkError, 'Unknown error code')
    }
    if (errorDescription.length > 255) {
      throw new CsmsError(OcppErrorCodeEnum.RpcFrameworkError, 'Error description is too long')
    }
    if (!errorDetails) {
      throw new CsmsError(OcppErrorCodeEnum.RpcFrameworkError, 'Wrong errorDetails')
    }
    return plainToClass(OcppErrorResponseMessageDto, {
      messageTypeId,
      messageId,
      errorCode,
      errorDescription,
      errorDetails,
    })
  } else {
    throw new CsmsError(OcppErrorCodeEnum.RpcFrameworkError, 'Unknown Call')
  }
}
