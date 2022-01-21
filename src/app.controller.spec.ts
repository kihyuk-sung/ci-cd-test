import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appService: AppService;
  let appController: AppController;

  beforeEach(async () => {
    appService = new AppService('in test');
    appController = new AppController(appService);
  });

  describe('root', () => {
    it('should return "Hello World! in test"', () => {
      expect(appController.getHello()).toBe('Hello World! in test');
    });
  });
});
