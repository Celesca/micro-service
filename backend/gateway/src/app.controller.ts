import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { CreateUserDto } from './models/user/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('product')
  getProduct(): Observable<string> {
    return this.appService.getProduct();
  }

  @Get('order')
  getOrder(): Observable<string> {
    return this.appService.getOrder();
  }
}
