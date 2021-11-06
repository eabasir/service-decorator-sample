import { Injectable } from '@nestjs/common';
import { SimpleGuard } from './guard';

@Injectable()
export class AppService {
  @SimpleGuard(true)
  getHello(): string {
    return 'Hello World!';
  }
}
