import {
  OcppCallDto,
  OcppCallErrorDto,
  OcppErrorCode,
  OcppMessageEnum,
  OcppMessageTypeIdEnum,
} from '@yellowgarbagebag/csms-shared'
import { plainToClass } from 'class-transformer'
import { validateSync } from 'class-validator'

export function validateOcppCall(data: unknown): OcppCallDto | OcppCallErrorDto {
  if (!data) {
    return new OcppCallErrorDto('', OcppErrorCode.RpcFrameworkError, 'Invalid data format received')
  }
  if (typeof data !== 'string') {
    return new OcppCallErrorDto('', OcppErrorCode.RpcFrameworkError, 'Invalid data format received')
  }

  try {
    data = JSON.parse(data)
  } catch (err) {
    return new OcppCallErrorDto('', OcppErrorCode.RpcFrameworkError, 'Invalid data format received')
  }

  if (!Array.isArray(data)) {
    return new OcppCallErrorDto('', OcppErrorCode.RpcFrameworkError, 'No array received')
  }
  if (data.length !== 4) {
    return new OcppCallErrorDto('', OcppErrorCode.RpcFrameworkError, 'Received array has not exact 4 items')
  }
  if (data[0] !== OcppMessageTypeIdEnum.Call) {
    return new OcppCallErrorDto('', OcppErrorCode.RpcFrameworkError, 'MessageType is not 2')
  }
  if (!Object.values(OcppMessageEnum).includes(data[2])) {
    return new OcppCallErrorDto(data[1], OcppErrorCode.NotImplemented)
  }

  const obj = {
    messageTypeId: data[0],
    messageId: data[1],
    action: data[2],
    payload: data[3],
  }

  const ocppCall = plainToClass(OcppCallDto, obj)
  const errors = validateSync(ocppCall)
  if (errors.length > 0) {
    return new OcppCallErrorDto(data[1], OcppErrorCode.FormatViolation, 'Validation failed')
  }
  return ocppCall
}
