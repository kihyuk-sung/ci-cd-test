import { AppService } from './app.service';
import AppConfigServiceImpl from './config.service';
import { AppConfigService } from './config.interface';

describe('appService', () => {
  let appService: AppService;
  let configureService: AppConfigService;
  const appName = 'Local App';

  beforeEach(() => {
    configureService = {
      getAppName: () => appName,
    };
    appService = new AppService(configureService);
  });

  it('getHello', () => {
    expect(appService.getHello()).toBe(`Hello World! Local App`);
  });
});
