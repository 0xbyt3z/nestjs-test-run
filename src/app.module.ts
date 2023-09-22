import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileService } from './services/file.service';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { ExceptionController } from './controllers/exception/exception.controller';
import { FileController } from './controllers/file/file.controller';

@Module({
  imports: [],
  controllers: [AppController, ExceptionController, FileController],
  providers: [AppService, FileService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('');
  }
}
