import {
  OcppErrorCodeEnum,
  OcppErrorResponseMessageDto,
  OcppMessageEnum,
  OcppMessageTypeIdEnum,
  OcppRequestMessageDto,
  toClass,
} from '@yellowgarbagebag/csms-shared'

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
      '',
      OcppErrorCodeEnum.RpcFrameworkError,
      'Received array has not exact 4 items',
    )
  }
  if (data[0] !== OcppMessageTypeIdEnum.Call) {
    throw new OcppErrorResponseMessageDto('', OcppErrorCodeEnum.RpcFrameworkError, 'MessageType is not 2')
  }
  if (data[1].length > 32) {
    throw new OcppErrorResponseMessageDto('', OcppErrorCodeEnum.RpcFrameworkError, 'MessageId is too long')
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
