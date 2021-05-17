import { plainToClass } from 'class-transformer'
import { RpcErrorCodeEnum } from './rpc-error-code.enum'
import { RpcCallDto } from './calls/rpc-call.dto'
import { RpcCallresultDto } from './calls/rpc-callresult.dto'
import { actionDtoMapping } from '../generated/action-dto-mapping'
import { RpcActionEnum } from '../generated/rpc-action.enum'
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

  public convertRequestPayload(msg: RpcCallDto): void {
    const mapping = actionDtoMapping.find((x) => x.action === msg.action)
    if (!mapping) {
      throw new CsmsError(RpcErrorCodeEnum.NotSupported, msg.action)
    }
    msg.payload = plainToClass(mapping.requestDto, msg.payload)
  }

  public convertResponsePayload(msg: RpcCallresultDto, action: RpcActionEnum): void {
    const mapping = actionDtoMapping.find((x) => x.action === action)
    if (!mapping) {
      throw new CsmsError(RpcErrorCodeEnum.NotSupported, action)
    }
    msg.payload = plainToClass(mapping.responseDto, msg.payload)
  }
}
