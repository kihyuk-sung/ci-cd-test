import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import AppConfigServiceImpl from './config.service';

@Module({
  imports: [ConfigModule.forRoot(), ConfigModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'APP_CONFIG_SERVICE',
      useClass: AppConfigServiceImpl,
    },
  ],
})
export class AppModule {}
