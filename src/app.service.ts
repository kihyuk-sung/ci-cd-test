import { Inject, Injectable } from '@nestjs/common';
import { APP_NAME } from './inject/constant';
import { ConfigService } from '@nestjs/config';
import { AppConfigService } from './config.interface';

@Injectable()
export class AppService {
  private readonly appName: string;

  constructor(
    @Inject('APP_CONFIG_SERVICE')
    private readonly appConfigService: AppConfigService,
  ) {
    this.appName = appConfigService.getAppName();
  }

  getHello(): string {
    return `Hello World! ${this.appName}`;
  }
}
