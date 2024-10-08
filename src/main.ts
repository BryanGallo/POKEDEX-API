import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //se puede especifircar el prefijo de nuestra API
  app .setGlobalPrefix('api/v2');
  await app.listen(3000);
}
bootstrap();
