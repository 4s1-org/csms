import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AllHttpExceptionsFilter } from './all-http-exceptions.filter'
import { AppModule } from './app.module'

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule)

  app.useGlobalFilters(new AllHttpExceptionsFilter())
  //app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000)
}
bootstrap()
