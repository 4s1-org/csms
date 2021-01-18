import {
  OcppCallDto,
  OcppCallErrorDto,
  OcppErrorCode,
  OcppMessageEnum,
  OcppMessageTypeIdEnum,
  validateData,
  toClass,
} from '@yellowgarbagebag/csms-shared'

export function validateOcppCall(data: unknown): OcppCallDto {
  if (!data) {
    throw new OcppCallErrorDto('', OcppErrorCode.RpcFrameworkError, 'Invalid data format received')
  }
  if (typeof data !== 'string') {
    throw new OcppCallErrorDto('', OcppErrorCode.RpcFrameworkError, 'Invalid data format received')
  }

  try {
    data = JSON.parse(data)
  } catch (err) {
    throw new OcppCallErrorDto('', OcppErrorCode.RpcFrameworkError, 'Invalid data format received')
  }

  if (!Array.isArray(data)) {
    throw new OcppCallErrorDto('', OcppErrorCode.RpcFrameworkError, 'No array received')
  }
  if (data.length !== 4) {
    throw new OcppCallErrorDto('', OcppErrorCode.RpcFrameworkError, 'Received array has not exact 4 items')
  }
  if (data[0] !== OcppMessageTypeIdEnum.Call) {
    throw new OcppCallErrorDto('', OcppErrorCode.RpcFrameworkError, 'MessageType is not 2')
  }
  if (!Object.values(OcppMessageEnum).includes(data[2])) {
    throw new OcppCallErrorDto(data[1], OcppErrorCode.NotImplemented)
  }

  const obj = {
    messageTypeId: data[0],
    messageId: data[1],
    action: data[2],
    payload: data[3],
  }

  const ocppCall = toClass(OcppCallDto, obj)
  validateData(ocppCall, obj.messageId)
  return ocppCall
}
