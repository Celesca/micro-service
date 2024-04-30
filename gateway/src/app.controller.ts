import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // User API Endpoints

  @Get('users')
  getUser(): Observable<string> {
    return this.appService.getUser();
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
