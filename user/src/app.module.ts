import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb://root:example@localhost:27017/userdb?authSource=admin',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
