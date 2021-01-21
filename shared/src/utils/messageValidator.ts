import { Validator } from 'jsonschema'
import fs from 'fs'
import path from 'path'
import { OcppRequestMessageDto } from '../callMessages/ocpp-request-message.dto'
import { OcppErrorResponseMessageDto } from '../callMessages/ocpp-error-response-message.dto'
import { OcppErrorCodeEnum } from '../callMessages/ocpp-error-code.enum'
import { OcppResponseMessageDto } from '../callMessages/ocpp-response-message.dto'
import { OcppMessageEnum } from '../generated/ocpp-message.enum'

export class MessageValidator {
  private static _instance: MessageValidator
  private _validator: Validator
  private _schemas: { [key: string]: any } = {}

  private constructor() {
    this._validator = new Validator()
  }

  public static get instance(): MessageValidator {
    if (!this._instance) {
      this._instance = new MessageValidator()
      this._instance.init()
    }
    return this._instance
  }

  private init(): void {
    const dir = path.join(__dirname, '..', '..', 'third-party', 'ocpp', '2.0.1')
    const files = fs.readdirSync(dir)

    for (const file of files) {
      const schema: any = JSON.parse(fs.readFileSync(path.join(dir, file)).toString())
      const fileNameWithoutExt = file.substr(0, file.length - 5)
      this._schemas[fileNameWithoutExt] = schema
    }
  }

  public validateRequest(request: OcppRequestMessageDto): any {
    console.log(request)
    this.validate(request.messageId, request.payload, this._schemas[request.action + 'Request'])
  }

  public validateResponse(response: OcppResponseMessageDto, action: OcppMessageEnum): any {
    this.validate('', response.payload, this._schemas[action + 'Response'])
  }

  private validate(messageId: string, data: any, schema: any): void {
    const validation = this._validator.validate(data, schema, {
      allowUnknownAttributes: false,
      skipAttributes: ['$id', 'comment', 'definitions', 'javaType'],
    })

    if (!validation.valid) {
      const errStr = validation.errors.map((x) => x.toString()).join('\n')
      throw new OcppErrorResponseMessageDto(messageId, OcppErrorCodeEnum.FormatViolation, 'Validation failed', errStr)
    }
  }
}
