import { Logger, ParseArrayPipe, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common'
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
} from '@yellowgarbagebag/csms-shared'
import { OcppCallValidationPipe } from './ocpp-call-validation.pipe'
import { AllWsExceptionsFilter } from '../all-ws-exceptions.filter'

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

  @UsePipes(new ParseArrayPipe(), new OcppCallValidationPipe(), new ValidationPipe())
  @SubscribeMessage('ocpp')
  async ocppCommand(@MessageBody() ocppCall: OcppCallDto): Promise<OcppCallResultDto> {
    switch (ocppCall.action) {
      case OcppMessageEnum.BootNotification:
        const data = ocppCall.payload as BootNotificationRequestDto
        const foo = this.bootNotification(data)
        return new OcppCallResultDto(ocppCall.messageId, foo)
      default:
        throw new Error(`Unsupported command "${ocppCall.action}"`)
    }
  }

  @UsePipes()
  private async bootNotification(
    @MessageBody() body: BootNotificationRequestDto,
  ): Promise<BootNotificationResponseDto> {
    return new BootNotificationResponseDto('2013-02-01T20:53:32.486Z', 300, RegistrationStatusEnum.Accepted)
  }
}
