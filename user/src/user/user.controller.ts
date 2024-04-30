import { Controller, Get, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {

    @MessagePattern({ cmd: 'get/users'})
    @Get()
    getAllUsers() {
        return 'This action returns all users';
    }

    @Post()
    createNewUser() {
        return 'This action creates a new user';
    }


}
