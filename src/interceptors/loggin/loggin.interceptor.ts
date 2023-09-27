import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // console.log(`Intercept Request from ${context.getArgs()[0].url}`);
    //you can do what ever with the context
    const now = Date.now();
    // return next
    //   .handle()
    //   .pipe(tap(() => console.log(`Took ${Date.now() - now}ms.`)));

    return next.handle().pipe();
  }
}
