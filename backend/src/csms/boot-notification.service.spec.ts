import { Test, TestingModule } from '@nestjs/testing'
import { BootNotificationService } from './boot-notification.service'

describe('BootNotificationService', () => {
  let service: BootNotificationService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BootNotificationService],
    }).compile()

    service = module.get<BootNotificationService>(BootNotificationService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
