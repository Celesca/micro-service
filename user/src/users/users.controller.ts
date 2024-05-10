import {
  Controller,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: 'get/users' })
  findAll() {
    return this.usersService.findAll();
  }

  @MessagePattern({ cmd: 'get/usersById' })
  findOne(@Payload() id: string) {
    return this.usersService.findOne(id);
  }

  @MessagePattern({ cmd: 'post/users' })
  create(@Payload() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @MessagePattern({ cmd: 'update/users' })
  update(@Payload() payload : {id: string, updateUserDto: UpdateUserDto } ) {
    return this.usersService.update(payload.id, payload.updateUserDto);
  }

  @MessagePattern({ cmd: 'delete/users'})
  remove(@Payload() id: string) {
    return this.usersService.remove(id);
  }
}
