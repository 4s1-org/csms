import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { BaseWsExceptionFilter } from '@nestjs/websockets'
import { AppModule } from './app.module'

// ToDo: Schöner machen
// https://github.com/nestjs/nest/issues/3476#issuecomment-558976374
export class BadRequestTransformationFilter extends BaseWsExceptionFilter {}

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors): BadRequestTransformationFilter => new BadRequestTransformationFilter(),
    }),
  )
  await app.listen(3000)
}
bootstrap()
