import { plainToClass } from 'class-transformer'
import { OcppErrorCodeEnum } from '../../calls/ocpp-error-code.enum'
import { OcppRequestCallDto } from '../../calls/ocpp-request-call.dto'
import { OcppResponseCallDto } from '../../calls/ocpp-response-call.dto'
import { actionDtoMapping } from '../../generated/actionDtoMapping'
import { OcppActionEnum } from '../../generated/ocpp-action.enum'
import { CsmsError } from '../errors/csms-error'

export class PayloadConverter {
  private static _instance: PayloadConverter

  private constructor() {
    // nothing to do
  }

  public static get instance(): PayloadConverter {
    if (!this._instance) {
      this._instance = new PayloadConverter()
    }
    return this._instance
  }

  public convertRequest(call: OcppRequestCallDto): void {
    const mapping = actionDtoMapping.find((x) => x.action === call.action)
    if (!mapping) {
      throw new CsmsError(OcppErrorCodeEnum.NotSupported, call.action)
    }
    call.payload = plainToClass(mapping.requestDto, call.payload)
  }

  public convertResponse(call: OcppResponseCallDto, action: OcppActionEnum): void {
    const mapping = actionDtoMapping.find((x) => x.action === action)
    if (!mapping) {
      throw new CsmsError(OcppErrorCodeEnum.NotSupported, action)
    }
    call.payload = plainToClass(mapping.responseDto, call.payload)
  }
}
