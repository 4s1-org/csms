import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common'
import { OcppCallDto, OcppMessageTypeIdEnum } from '@yellowgarbagebag/csms-shared'

@Injectable()
export class OcppCallValidationPipe implements PipeTransform {
  public transform(value: unknown, metadata: ArgumentMetadata): OcppCallDto {
    if (metadata.type !== 'body') {
      throw new BadRequestException('Invalid data transfer')
    }
    if (!Array.isArray(value)) {
      throw new BadRequestException('No array received')
    }
    if (value.length !== 4) {
      throw new BadRequestException('Received array has not exact 4 items')
    }
    if (value[0] !== OcppMessageTypeIdEnum.Call) {
      throw new BadRequestException('MessageType is not 2')
    }
    // ToDo: Die Prüfung der Länge musste doch die normale ValidationPipe machen.
    if (typeof value[1] !== 'string' || value[1].length > 32) {
      throw new BadRequestException('The messageId is invalid')
    }
    // ToDo: Eigentliche müsste das DTO es selbst machen
    // if (value[2] !== 'BootNotification') {
    //   throw new BadRequestException('Validation failed 6')
    // }
    if (typeof value[3] !== 'object') {
      throw new BadRequestException('Validation failed 7')
    }
    return new OcppCallDto(value[1], value[2], value[3])
  }
}
