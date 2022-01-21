import { Inject, Injectable } from '@nestjs/common';
import { APP_NAME } from './inject/constant';

@Injectable()
export class AppService {
  constructor(@Inject(APP_NAME) private readonly appName: string) {}
  getHello(): string {
    return `Hello World! ${this.appName}`;
  }
}
