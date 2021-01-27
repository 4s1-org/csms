import { plainToClass } from 'class-transformer'
import { OcppErrorCodeEnum } from '../callMessages/ocpp-error-code.enum'
import { OcppRequestMessageDto } from '../callMessages/ocpp-request-message.dto'
import { OcppErrorResponseMessageDto } from '../callMessages/ocpp-error-response-message.dto'
import { OcppMessageTypeIdEnum } from '../callMessages/ocpp-message-type-id.enum'
import { OcppMessageEnum } from '../generated/ocpp-message.enum'

export declare type ClassConstructor<T> = {
  new (...args: any[]): T
}

export function toClass<T, V>(cls: ClassConstructor<T>, plain: V): T {
  return plainToClass(cls, plain)
}

export function arrayToRequestMessage(data: unknown): OcppRequestMessageDto {
  if (!data) {
    throw new OcppErrorResponseMessageDto('', OcppErrorCodeEnum.RpcFrameworkError, 'Invalid data format received')
  }
  if (typeof data !== 'string') {
    throw new OcppErrorResponseMessageDto('', OcppErrorCodeEnum.RpcFrameworkError, 'Invalid data format received')
  }

  try {
    data = JSON.parse(data)
  } catch (err) {
    throw new OcppErrorResponseMessageDto('', OcppErrorCodeEnum.RpcFrameworkError, 'Invalid data format received')
  }

  if (!Array.isArray(data)) {
    throw new OcppErrorResponseMessageDto('', OcppErrorCodeEnum.RpcFrameworkError, 'No array received')
  }
  if (data.length !== 4) {
    throw new OcppErrorResponseMessageDto(
      data[1],
      OcppErrorCodeEnum.RpcFrameworkError,
      'Received array has not exact 4 items',
    )
  }
  if (data[0] !== OcppMessageTypeIdEnum.Call) {
    throw new OcppErrorResponseMessageDto(data[1], OcppErrorCodeEnum.RpcFrameworkError, 'MessageType is not 2')
  }
  if (data[1].length > 36) {
    throw new OcppErrorResponseMessageDto(data[1], OcppErrorCodeEnum.RpcFrameworkError, 'MessageId is too long')
  }
  if (!Object.values(OcppMessageEnum).includes(data[2])) {
    throw new OcppErrorResponseMessageDto(data[1], OcppErrorCodeEnum.NotImplemented)
  }

  const obj = {
    messageTypeId: data[0],
    messageId: data[1],
    action: data[2],
    payload: data[3],
  }

  return toClass(OcppRequestMessageDto, obj)
}
