import { plainToClass } from 'class-transformer'
import { OcppErrorCodeEnum } from '../../calls/ocpp-error-code.enum'
import { OcppRequestCallDto } from '../../calls/ocpp-request-call.dto'
import { OcppResponseCallDto } from '../../calls/ocpp-response-call.dto'
import { actionDtoMapping } from '../../generated/actionDtoMapping'
import { OcppActionEnum } from '../../generated/ocpp-action.enum'
import { CsmsError } from '../errors/csms-error'
import { PayloadValidator } from './payload-validator'

export abstract class PayloadConverter {
  public static convertRequest(call: OcppRequestCallDto): void {
    PayloadValidator.instance.validateRequestPayload(call.action, call.payload)

    const mapping = actionDtoMapping.find((x) => x.action === call.action)
    if (!mapping) {
      throw new CsmsError(OcppErrorCodeEnum.NotSupported, call.action)
    }
    call.payload = plainToClass(mapping.requestDto, call.payload)
  }

  public static convertResponse(call: OcppResponseCallDto, action: OcppActionEnum): void {
    PayloadValidator.instance.validateResponsePayload(action, call.payload)

    const mapping = actionDtoMapping.find((x) => x.action === action)
    if (!mapping) {
      throw new CsmsError(OcppErrorCodeEnum.NotSupported, action)
    }
    call.payload = plainToClass(mapping.responseDto, call.payload)
  }
}
