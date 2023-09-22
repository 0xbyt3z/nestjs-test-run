import { Controller, Get, HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';

@Controller('exception')
export class ExceptionController {
  @Get('error')
  async findAll() {
    try {
      await fetch('this url cause the error');
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: `${error}`,
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
