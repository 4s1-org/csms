import { CsmsError } from '../utils/csms-error'
import { OcppActionEnum } from '../generated/ocpp-action.enum'
import { jsonSchemas } from '../generated/json-schema-imports'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import v6 from 'ajv/lib/refs/json-schema-draft-06.json'
import { classToPlain } from 'class-transformer'
import { OcppCallDto } from './calls/rpc-call.dto'
import { OcppCallresultDto } from './calls/rpc-callresult.dto'
import { OcppErrorCodeEnum } from './rpc-error-code.enum'
export class PayloadValidator {
  private static _instance: PayloadValidator
  private _ajv: Ajv

  private constructor() {
    this._ajv = new Ajv({
      meta: v6,
      // Damit keine Warnung bei "additionalProperties" kommt.
      strict: false,
    })
    // Damit "date-time" geht
    addFormats(this._ajv)
  }

  public static get instance(): PayloadValidator {
    if (!this._instance) {
      this._instance = new PayloadValidator()
    }
    return this._instance
  }

  public validateRequestPayload(msg: OcppCallDto): any {
    this.validate(classToPlain(msg.payload), jsonSchemas[msg.action + 'Request'])
  }

  public validateResponsePayload(msg: OcppCallresultDto, action: OcppActionEnum): any {
    this.validate(classToPlain(msg.payload), jsonSchemas[action + 'Response'])
  }

  private validate(data: any, schema: any): void {
    const validate = this._ajv.compile(schema)
    const valid = validate(data)

    if (!valid) {
      const errMessage = validate.errors?.map((x) => x.toString()).join('\n')
      throw new CsmsError(OcppErrorCodeEnum.FormatViolation, errMessage)
    }
  }
}
