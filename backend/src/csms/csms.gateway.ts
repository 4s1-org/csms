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
  OcppCallErrorDto,
} from '@yellowgarbagebag/csms-shared'
import { OcppCallValidationPipe } from './ocpp-call-validation.pipe'
import { AllWsExceptionsFilter } from '../all-ws-exceptions.filter'
import { ConditionalValidationPipe } from './conditional-validation.pipe'
import { plainToClass } from 'class-transformer'
import { ClassType } from 'class-transformer/ClassTransformer'
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
  async ocppCommand(@MessageBody() ocppCall: OcppCallDto): Promise<[number, string, unknown]> {
    switch (ocppCall.action) {
      case OcppMessageEnum.BootNotification:
        const entityClass = plainToClass(BootNotificationRequestDto, ocppCall.payload)
        await this.validate(entityClass)
        const foo = this.bootNotification(entityClass)
        return new OcppCallResultDto(ocppCall.messageId, foo).toMessage()
      default:
        this.handleOtherActions(ocppCall.action)
    }
  }

  private handleOtherActions(action: OcppMessageEnum): void {
    if (Object.values(OcppMessageEnum).includes(action)) {
      // Requested Action is recognized but not supported by the receiver
      throw new OcppWsException(OcppErrorCode.NotSupported, action)
    } else {
      // Requested Action is not known by receiver
      throw new OcppWsException(OcppErrorCode.NotImplemented, action)
    }
  }

  private async validate(entityClass: any): Promise<void> {
    const errors = await validate(entityClass)
    if (errors.length > 0) {
      throw new OcppWsException(OcppErrorCode.FormatViolation, 'foobar')
    }
  }

  private bootNotification(payload: BootNotificationRequestDto): BootNotificationResponseDto {
    return new BootNotificationResponseDto('2013-02-01T20:53:32.486Z', 300, RegistrationStatusEnum.Accepted)
  }
}
