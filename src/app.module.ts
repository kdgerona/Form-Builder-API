import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { FormModule } from './resources/form/form.module';

// * Middlewares
import { AppLoggerMiddleware } from './middlewares/app-logger.middleware';

@Module({
  imports: [FormModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
