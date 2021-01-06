import { Logger, UseFilters } from '@nestjs/common'
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayInit,
  OnGatewayDisconnect,
  ConnectedSocket,
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
  OcppMessageTypeIdEnum,
  OccpCallResultType,
} from '@yellowgarbagebag/csms-shared'
import { AllWsExceptionsFilter } from '../all-ws-exceptions.filter'
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'
import { OcppWsException } from './ocpp-exception'
import { IncomingMessage } from 'http'
import { ChargingStation } from './charging-station'

@WebSocketGateway({ path: '/ocpp/2.0.1' })
@UseFilters(new AllWsExceptionsFilter())
export class CsmsGateway implements OnGatewayInit, OnGatewayDisconnect, OnGatewayConnection {
  private logger: Logger = new Logger('CsmsGateway')

  private chargingStations: ChargingStation[] = []

  private getChargingStation(uniqueIdentifier: string): ChargingStation {
    let chargingStation = this.chargingStations.find((x) => x.uniqueIdentifier === uniqueIdentifier)
    if (!chargingStation) {
      chargingStation = new ChargingStation(uniqueIdentifier)
      this.chargingStations.push(chargingStation)
    }
    return chargingStation
  }

  @WebSocketServer()
  private server!: Server

  public afterInit(): void {
    this.logger.log('Websocket is available')
  }

  public async handleDisconnect(client: Socket): Promise<void> {
    this.logger.log(`Client disconnected: ${client.id}`)
  }

  public async handleConnection(client: Socket): Promise<void> {
    this.logger.log(`Client connected: ${client.id}`)
    const req: IncomingMessage = client.request as IncomingMessage
    const parts = req.url?.split('/')
    if (parts && parts.length >= 4) {
      const chargingStation = this.getChargingStation(parts[3])
      chargingStation.socketId = client.id
    } else {
      this.logger.log(`Client URL is invalid "${req.url}"`)
      client.disconnect()
    }
  }

  private async convertInputToOcppCall(data: unknown): Promise<OcppCallDto> {
    if (!data) {
      throw new OcppWsException(OcppErrorCode.RpcFrameworkError, 'Invalid data format received')
    }
    if (!Array.isArray(data)) {
      throw new OcppWsException(OcppErrorCode.RpcFrameworkError, 'No array received')
    }
    if (data.length !== 4) {
      throw new OcppWsException(OcppErrorCode.RpcFrameworkError, 'Received array has not exact 4 items')
    }
    if (data[0] !== OcppMessageTypeIdEnum.Call) {
      throw new OcppWsException(OcppErrorCode.RpcFrameworkError, 'MessageType is not 2', data[1])
    }
    if (!Object.values(OcppMessageEnum).includes(data[2])) {
      throw new OcppWsException(OcppErrorCode.NotImplemented, data[2], data[1])
    }

    const obj = {
      messageTypeId: data[0],
      messageId: data[1],
      action: data[2],
      payload: data[3],
    }

    const ocppCall = plainToClass(OcppCallDto, obj)
    await this.validate(ocppCall, ocppCall.messageId)
    return ocppCall
  }

  @SubscribeMessage('ocpp')
  async ocppCommand(
    @MessageBody() data: unknown,
    @ConnectedSocket() client: Socket,
  ): Promise<OccpCallResultType | any> {
    const ocppCall = await this.convertInputToOcppCall(data)
    const chargingStation = this.chargingStations.find((x) => x.socketId === client.id)
    // ToDo: Was ist, wenn es keine ChargingStation gibt?
    console.log(chargingStation)

    let response: IResponseMessage
    switch (ocppCall.action) {
      case OcppMessageEnum.BootNotification:
        const bootNotification = plainToClass(BootNotificationRequestDto, ocppCall.payload as unknown)
        await this.validate(bootNotification, ocppCall.messageId)
        response = this.bootNotification(bootNotification)
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
