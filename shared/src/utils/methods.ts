import { plainToClass } from 'class-transformer'
import { validateSync } from 'class-validator'
import { OcppBaseDto } from '../custom/ocpp-base.dto'
import { OcppCallErrorDto } from '../custom/ocpp-call-error.dto'
import { OcppErrorCode } from '../custom/ocpp-error-code'
import { RequestBaseDto } from '../generated/request-base.dto'
import { ResponseBaseDto } from '../generated/response-base.dto'

export function validateData(data: OcppBaseDto | RequestBaseDto | ResponseBaseDto, messageId: string): void {
  const errors = validateSync(data, { whitelist: true, forbidNonWhitelisted: true })
  if (errors.length > 0) {
    const errStr = errors.map((x) => x.toString()).join('\n\n')

    if (data instanceof OcppBaseDto) {
      throw new OcppCallErrorDto(messageId, OcppErrorCode.RpcFrameworkError, 'Message is invalid', errStr)
    } else if (data instanceof RequestBaseDto || data instanceof ResponseBaseDto) {
      throw new OcppCallErrorDto(messageId, OcppErrorCode.FormatViolation, 'Validation failed', errStr)
    } else {
      throw new OcppCallErrorDto(messageId, OcppErrorCode.InternalError, 'Unknown type to validate', errStr)
    }
  }
}

export declare type ClassConstructor<T> = {
  new (...args: any[]): T
}

export function toClass<T, V>(cls: ClassConstructor<T>, plain: V): T {
  return plainToClass(cls, plain)
}
