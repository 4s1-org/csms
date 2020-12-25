import { Module } from '@nestjs/common'
import { BootNotificationService } from './boot-notification.service'
import { CsmsGateway } from './csms.gateway'

@Module({
  providers: [BootNotificationService, CsmsGateway],
  controllers: [],
})
export class CsmsModule {}
