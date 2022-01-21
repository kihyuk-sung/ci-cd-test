import { AppConfigService } from './config.interface';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { APP_NAME } from './inject/constant';

@Injectable()
export default class AppConfigServiceImpl implements AppConfigService {
  constructor(private readonly configService: ConfigService) {}
  getAppName(): string {
    return this.configService.get<string>('APP_NAME');
  }
}
