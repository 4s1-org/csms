import { Logger, UsePipes } from '@nestjs/common'
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
import { BootNotificationResponseDto, OcppCallPipe,OcppCallDto, OcppCallResultDto,RegistrationStatusEnum } from '../../../shared/dist'

@WebSocketGateway({ path: '/ocpp/2.0.1' })
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

  @UsePipes(new OcppCallPipe())
  @SubscribeMessage('ocpp')
  async ocppCommand(@MessageBody() data: OcppCallDto): Promise<OcppCallResultDto> {
    const foo = new BootNotificationResponseDto('2013-02-01T20:53:32.486Z', 300, RegistrationStatusEnum.Accepted)
    return new OcppCallResultDto(3, data.messageId, foo)
  }
}
