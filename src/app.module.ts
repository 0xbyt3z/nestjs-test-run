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
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { PrismaService } from './services/prisma.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
  ],
  controllers: [AppController, ExceptionController, FileController],
  providers: [
    AppService,
    FileService,
    AppResolver,
    UserService,
    PostService,
    PrismaService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('');
  }
}
