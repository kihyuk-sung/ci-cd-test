import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { AppConfigService } from './config.interface';

describe('AppController', () => {
  let appService: AppService;
  let appController: AppController;
  let configureService: AppConfigService;

  beforeEach(async () => {
    configureService = {
      getAppName: () => 'in test',
    };
    appService = new AppService(configureService);
    appController = new AppController(appService);
  });

  describe('root', () => {
    it('should return "Hello World! in test"', () => {
      expect(appController.getHello()).toBe('Hello World! in test');
    });
  });
});
