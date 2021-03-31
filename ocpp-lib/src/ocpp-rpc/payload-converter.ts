import { plainToClass } from 'class-transformer'
import { OcppErrorCodeEnum } from './ocpp-error-code.enum'
import { OcppCallDto } from './ocpp-call.dto'
import { OcppCallresultDto } from './ocpp-callresult.dto'
import { actionDtoMapping } from '../generated/action-dto-mapping'
import { OcppActionEnum } from '../generated/ocpp-action.enum'
import { CsmsError } from '../utils/csms-error'

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

  public convertRequestPayload(msg: OcppCallDto): void {
    const mapping = actionDtoMapping.find((x) => x.action === msg.action)
    if (!mapping) {
      throw new CsmsError(OcppErrorCodeEnum.NotSupported, msg.action)
    }
    msg.payload = plainToClass(mapping.requestDto, msg.payload)
  }

  public convertResponsePayload(msg: OcppCallresultDto, action: OcppActionEnum): void {
    const mapping = actionDtoMapping.find((x) => x.action === action)
    if (!mapping) {
      throw new CsmsError(OcppErrorCodeEnum.NotSupported, action)
    }
    msg.payload = plainToClass(mapping.responseDto, msg.payload)
  }
}
