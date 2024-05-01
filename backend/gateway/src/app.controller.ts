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

  // User API Endpoints

  @Get('users')
  getUsers(): Observable<string> {
    return this.appService.getUsers();
  }

  @Get('users/:id')
  getUserById(@Param('id') id: string): Observable<string> {
    return this.appService.getUserById(+id);
  }

  @Post('users')
  postUsers(@Body() newUser: CreateUserDto): Observable<string> {
    return this.appService.postUsers(newUser);
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
