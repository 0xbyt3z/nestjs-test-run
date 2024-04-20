import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import { Request } from 'express';
import { LoggingInterceptor } from './interceptors/loggin/loggin.interceptor';
import { PrismaService } from './services/prisma.service';
// import { Test } from './decorators/test/test.decorator';

@UseInterceptors(LoggingInterceptor)
@Controller('')
export class AppController {
  constructor(private prismaService: PrismaService) {}
  //simple get route
  @Get('')
  getRoute(): string {
    return 'Hello this is a string';
  }
  //simple get route return json
  @Get('json')
  jsonRoute(): object {
    return { msg: 'This is a object' };
  }
  // get route with url params
  @Get('q')
  paramsRoute(@Req() request: Request): object {
    return request.query;
  }

  @Get('q2')
  paramsRoute2(@Query('id') id: number): number {
    return id;
  }

  //simple post route
  @Post('post')
  postRoute(@Req() request: Request): object {
    return request.body;
  }
  // route wildcards
  @Get('12*')
  routeWildCards(@Req() request: Request): string {
    return `url : ${request.path}`;
  }
  //setting default status code and headers
  @Get('defaults')
  @HttpCode(200)
  @Header('Cache-Control', 'another test')
  @Header('Content-Type', 'test/test')
  create() {
    return 'This route tests defaults';
  }
  //this redirect users
  @Get('redirect')
  @Redirect('/you-are-redirected', 301)
  redirect() {}
  //dynamic routes
  @Get('dynamic/:id')
  dynamic1(@Param() params: any): string {
    return `${params.id}`;
  }
  @Get('dynamic2/:id')
  dynamic2(@Param('id') id: any): string {
    return `${id}`;
  }
  @Get(':id1/:id2')
  dynamic3(@Param() params: { id1: any; id2: any }): object {
    return params;
  }

  @Get('data')
  dataRoute1() {
    return this.prismaService.post.findMany();
  }
}
