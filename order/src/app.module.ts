import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { MysqlModule } from 'nest-mysql';

@Module({
  imports: [
    OrdersModule,
    MysqlModule.forRootAsync({
      useFactory: () => ({
        host: 'localhost',
        database: 'orderdb',
        password: 'root',
        user: 'root',
        port: 3306,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
