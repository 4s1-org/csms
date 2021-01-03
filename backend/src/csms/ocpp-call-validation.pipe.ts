import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common'
import { OcppCallDto, OcppErrorCode, OcppMessageEnum, OcppMessageTypeIdEnum } from '@yellowgarbagebag/csms-shared'
import { OcppWsException } from './ocpp-exception'

@Injectable()
export class OcppCallValidationPipe implements PipeTransform {
  public transform(value: unknown, metadata: ArgumentMetadata): OcppCallDto {
    if (metadata.type !== 'body') {
      throw new OcppWsException(OcppErrorCode.RpcFrameworkError, 'Invalid parameter transfer')
    }
    if (!value) {
      throw new OcppWsException(OcppErrorCode.RpcFrameworkError, 'Invalid data format received')
    }
    if (!Array.isArray(value)) {
      throw new OcppWsException(OcppErrorCode.RpcFrameworkError, 'No array received')
    }
    if (value.length !== 4) {
      throw new OcppWsException(OcppErrorCode.RpcFrameworkError, 'Received array has not exact 4 items')
    }
    if (value[0] !== OcppMessageTypeIdEnum.Call) {
      throw new OcppWsException(OcppErrorCode.RpcFrameworkError, 'MessageType is not 2', value[1])
    }
    if (!Object.values(OcppMessageEnum).includes(value[2])) {
      throw new OcppWsException(OcppErrorCode.NotImplemented, value[2], value[1])
    }
    return new OcppCallDto(value[1], value[2], value[3])
  }
}
