import { NestFactory } from '@nestjs/core'
import { WsAdapter } from '@nestjs/platform-ws'
import { AllHttpExceptionsFilter } from './all-http-exceptions.filter'
import { AppModule } from './app.module'

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule)

  app.useGlobalFilters(new AllHttpExceptionsFilter())
  //app.useGlobalPipes(new ValidationPipe())
  app.useWebSocketAdapter(new WsAdapter(app))
  await app.listen(3000)
}
bootstrap()
