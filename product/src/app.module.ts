import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      'mongodb://root:root@localhost:27018/productdb?authSource=admin',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
