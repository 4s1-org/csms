import { Logger, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common'
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayInit,
  OnGatewayDisconnect,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import {
  BootNotificationResponseDto,
  OcppCallDto,
  OcppCallResultDto,
  RegistrationStatusEnum,
  OcppMessageEnum,
  BootNotificationRequestDto,
  OcppErrorCode,
  IResponseMessage,
} from '@yellowgarbagebag/csms-shared'
import { OcppCallValidationPipe } from './ocpp-call-validation.pipe'
import { AllWsExceptionsFilter } from '../all-ws-exceptions.filter'
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'
import { OcppWsException } from './ocpp-exception'

@WebSocketGateway({ path: '/ocpp/2.0.1' })
@UseFilters(new AllWsExceptionsFilter())
export class CsmsGateway implements OnGatewayInit, OnGatewayDisconnect, OnGatewayConnection {
  @WebSocketServer()
  private server!: Server

  private logger: Logger = new Logger('CsmsGateway')

  public afterInit(): void {
    this.logger.log('Websocket is available')
  }

  public async handleDisconnect(client: Socket): Promise<void> {
    this.logger.log(`Client disconnected: ${client.id}`)
  }

  public async handleConnection(client: Socket): Promise<void> {
    this.logger.log(`Client connected: ${client.id}`)
  }

  @UsePipes(new OcppCallValidationPipe(), new ValidationPipe())
  @SubscribeMessage('ocpp')
  async ocppCommand(@MessageBody() ocppCall: OcppCallDto): Promise<[number, string, IResponseMessage]> {
    let response: IResponseMessage

    switch (ocppCall.action) {
      case OcppMessageEnum.BootNotification:
        const entityClass = plainToClass(BootNotificationRequestDto, ocppCall.payload as unknown)
        await this.validate(entityClass, ocppCall.messageId)
        response = this.bootNotification(entityClass)
        break
      default: {
        throw new OcppWsException(OcppErrorCode.NotSupported, ocppCall.action, ocppCall.messageId)
      }
    }

    return new OcppCallResultDto(ocppCall.messageId, response).toMessage()
  }

  private async validate(entityClass: any, messageId: string): Promise<void> {
    const errors = await validate(entityClass)
    if (errors.length > 0) {
      throw new OcppWsException(OcppErrorCode.FormatViolation, 'foobar', messageId)
    }
  }

  private bootNotification(payload: BootNotificationRequestDto): BootNotificationResponseDto {
    return new BootNotificationResponseDto('2013-02-01T20:53:32.486Z', 300, RegistrationStatusEnum.Accepted)
  }
}
