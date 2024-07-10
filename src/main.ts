import { NestFactory } from '@nestjs/core';
import 'dotenv/config';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

const { PORT, APP_ALLOWED_ORIGIN } = process?.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  app.enableCors({
    origin: APP_ALLOWED_ORIGIN.split(','),
    credentials: true,
  });

  await app.listen(+PORT);
}
bootstrap();
