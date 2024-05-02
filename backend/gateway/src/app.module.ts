import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalClientModule } from './client.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [GlobalClientModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
