import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CsmsModule } from './csms/csms.module'

@Module({
  imports: [CsmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
