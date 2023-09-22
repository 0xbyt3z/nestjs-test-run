import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  //simple get route
  @Get()
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
  @Get(':id')
  dynamic1(@Param() params: any): string {
    return `${params.id}`;
  }

  @Get(':id')
  dynamic2(@Param('id') id: any): string {
    return `${id}`;
  }

  @Get(':id1/:id2')
  dynamic3(@Param() params: { id1: any; id2: any }): object {
    return params;
  }
}
