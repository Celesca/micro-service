import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {

    constructor(private readonly userService: UserService) {}

    @MessagePattern({ cmd: 'get/users'})
    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @MessagePattern({ cmd: 'post/users'})
    @Post()
    createNewUser(@Body() user: CreateUserDto) {
        return this.userService.createNewUser(user);
    }

}
