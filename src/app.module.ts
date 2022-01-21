import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { APP_NAME } from './inject/constant';

@Module({
  imports: [ConfigModule.forRoot(), ConfigModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_NAME,
      useValue: process.env.APP_NAME,
    },
  ],
})
export class AppModule {}
