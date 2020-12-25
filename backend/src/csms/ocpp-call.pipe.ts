import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common'

@Injectable()
export class OcppCallPipe implements PipeTransform {
  public transform(value: any, metadata: ArgumentMetadata): OcppCall {
    if (metadata.type !== 'body') {
      throw new BadRequestException('Validation failed 1')
    }
    if (!Array.isArray(value)) {
      throw new BadRequestException('Validation failed 2')
    }
    if (value.length !== 4) {
      throw new BadRequestException('Validation failed 3')
    }
    if (value[0] !== 2) {
      throw new BadRequestException('Validation failed 4')
    }
    if (typeof value[1] !== 'string' || value[1].length > 32) {
      throw new BadRequestException('Validation failed 5')
    }
    if (value[2] !== 'BootNotification') {
      throw new BadRequestException('Validation failed 6')
    }
    if (typeof value[3] !== 'object') {
      throw new BadRequestException('Validation failed 7')
    }
    return new OcppCall(value[0], value[1], value[2], value[3])
  }
}

export class OcppCall {
  constructor(
    public readonly messageTypeId: number,
    public readonly messageId: string,
    public readonly action: string,
    public readonly payload: any,
  ) {
    // nothing to do
  }
}
