import { AppService } from './app.service';

describe('appService', () => {
  let appService: AppService;
  const appName = 'Local App';

  beforeEach(() => {
    appService = new AppService(appName);
  });

  it('getHello', () => {
    expect(appService.getHello()).toBe(`Hello World! Local App`);
  });
});
