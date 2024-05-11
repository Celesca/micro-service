import { Module } from '@nestjs/common';
import { GlobalClientModule } from './client.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [GlobalClientModule, UsersModule, ProductsModule, OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
