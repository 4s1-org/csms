import { ChargingStation } from './charging-station'
import { ChargingStationModel } from '@yellowgarbagebag/csms-lib'
import {
  AuthorizeRequestDto,
  AuthorizeResponseDto,
  BootNotificationRequestDto,
  BootNotificationResponseDto,
  BootReasonEnum,
  ChargingStationDto,
  ConnectorStatusEnum,
  FirmwareDto,
  HeartbeatRequestDto,
  HeartbeatResponseDto,
  IdTokenDto,
  IdTokenEnum,
  ISendMessage,
  MeterValuesRequestDto,
  MeterValuesResponseDto,
  NotifyEventRequestDto,
  NotifyEventResponseDto,
  NotifyReportRequestDto,
  NotifyReportResponseDto,
  StatusNotificationRequestDto,
  StatusNotificationResponseDto,
  TransactionDto,
  TransactionEventEnum,
  TransactionEventRequestDto,
  TransactionEventResponseDto,
  TriggerReasonEnum,
  UpdateFirmwareRequestDto,
} from '@yellowgarbagebag/ocpp-lib'

describe('Charging Station', () => {
  const sendMessageStub = (null as unknown) as ISendMessage
  const dtNow = new Date().toISOString()

  describe('receive(...)', () => {
    const bootNotificationPayload = new BootNotificationRequestDto(new ChargingStationDto('x', 'y'), BootReasonEnum.Unknown)

    describe('Each request without further logic', () => {
      it('BootNotificationRequest', () => {
        // Arrange
        const cs = new ChargingStation(new ChargingStationModel(), sendMessageStub)
        // Act
        const res = cs.receive(bootNotificationPayload)
        // Assert
        expect(res).toBeInstanceOf(BootNotificationResponseDto)
      })

      it('HeartbeatRequest', () => {
        // Arrange
        const payload = new HeartbeatRequestDto()
        const cs = new ChargingStation(new ChargingStationModel(), sendMessageStub)
        cs.receive(bootNotificationPayload)
        // Act
        const res = cs.receive(payload)
        // Assert
        expect(res).toBeInstanceOf(HeartbeatResponseDto)
      })

      it('StatusNotificationRequest', () => {
        // Arrange
        const payload = new StatusNotificationRequestDto(dtNow, ConnectorStatusEnum.Available, 1, 1)
        const cs = new ChargingStation(new ChargingStationModel(), sendMessageStub)
        cs.receive(bootNotificationPayload)
        // Act
        const res = cs.receive(payload)
        // Assert
        expect(res).toBeInstanceOf(StatusNotificationResponseDto)
      })

      it('AuthorizeRequest', () => {
        // Arrange
        const payload = new AuthorizeRequestDto(new IdTokenDto('x', IdTokenEnum.NoAuthorization))
        const cs = new ChargingStation(new ChargingStationModel(), sendMessageStub)
        cs.receive(bootNotificationPayload)
        // Act
        const res = cs.receive(payload)
        // Assert
        expect(res).toBeInstanceOf(AuthorizeResponseDto)
      })

      it('MeterValuesRequest', () => {
        // Arrange
        const payload = new MeterValuesRequestDto(1, [])
        const cs = new ChargingStation(new ChargingStationModel(), sendMessageStub)
        cs.receive(bootNotificationPayload)
        // Act
        const res = cs.receive(payload)
        // Assert
        expect(res).toBeInstanceOf(MeterValuesResponseDto)
      })

      it('NotifyEventRequest', () => {
        // Arrange
        const payload = new NotifyEventRequestDto(dtNow, 1, [])
        const cs = new ChargingStation(new ChargingStationModel(), sendMessageStub)
        cs.receive(bootNotificationPayload)
        // Act
        const res = cs.receive(payload)
        // Assert
        expect(res).toBeInstanceOf(NotifyEventResponseDto)
      })

      it('NotifyReportRequest', () => {
        // Arrange
        const payload = new NotifyReportRequestDto(1, dtNow, 1)
        const cs = new ChargingStation(new ChargingStationModel(), sendMessageStub)
        cs.receive(bootNotificationPayload)
        // Act
        const res = cs.receive(payload)
        // Assert
        expect(res).toBeInstanceOf(NotifyReportResponseDto)
      })

      it('TransactionEventRequest', () => {
        // Arrange
        const payload = new TransactionEventRequestDto(
          TransactionEventEnum.Updated,
          dtNow,
          TriggerReasonEnum.Deauthorized,
          1,
          new TransactionDto('x'),
        )
        const cs = new ChargingStation(new ChargingStationModel(), sendMessageStub)
        cs.receive(bootNotificationPayload)
        // Act
        const res = cs.receive(payload)
        // Assert
        expect(res).toBeInstanceOf(TransactionEventResponseDto)
      })

      it('UpdateFirmwareRequest (not implemented)', () => {
        // Arrange
        const payload = new UpdateFirmwareRequestDto(1, new FirmwareDto('x', dtNow))
        const cs = new ChargingStation(new ChargingStationModel(), sendMessageStub)
        cs.receive(bootNotificationPayload)
        // Act + Assert
        expect(() => cs.receive(payload)).toThrow()
      })
    })

    it('without BootNotification first () =>', () => {
      // Arrange
      const payload = new NotifyReportRequestDto(1, dtNow, 1)
      const cs = new ChargingStation(new ChargingStationModel(), sendMessageStub)
      // Act + Assert
      expect(() => cs.receive(payload)).toThrow()
    })
  })
})
