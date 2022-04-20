import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as hpropagate from 'hpropagate';

async function bootstrap() {
  hpropagate({
    setAndPropagateCorrelationId: false,
    headersToPropagate: ['x-c6o-intercept'],
  });

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
