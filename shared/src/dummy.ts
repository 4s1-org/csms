import 'reflect-metadata'

import { OcppRequestMessageDto } from './callMessages'
import { ChargingStationDto } from './datatypes/charging-station.dto'
import { BootReasonEnum } from './enumerations/boot-reason.enum'
import { OcppMessageEnum } from './generated/ocpp-message.enum'
import { BootNotificationRequestDto } from './messages/boot-notification-request.dto'
import { MessageValidator } from './utils/messageValidator'

async function main(): Promise<void> {
  const payload = new BootNotificationRequestDto(
    new ChargingStationDto('SingleSocketCharger', 'VendorX'),
    BootReasonEnum.PowerUp,
  )
  const call = new OcppRequestMessageDto('foo', OcppMessageEnum.BootNotification, payload)
  MessageValidator.instance.validateRequestPayload(call)
}

main()
  .then()
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
