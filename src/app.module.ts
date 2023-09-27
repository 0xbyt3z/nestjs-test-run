import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileService } from './services/file.service';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { ExceptionController } from './controllers/exception/exception.controller';
import { FileController } from './controllers/file/file.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppResolver } from './resolvers/app/app.resolver';
import { AuthorsResolver } from './resolvers/app/authors.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsService } from './services/authors.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5555,
      username: 'postgres',
      password: 'pass123',
      database: 'crud',
      entities: ['dist/**/*.model.js'],
      synchronize: false,
    }),
  ],
  controllers: [AppController, ExceptionController, FileController],
  providers: [
    AppService,
    FileService,
    AuthorsService,
    AppResolver,
    AuthorsResolver,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('');
  }
}
