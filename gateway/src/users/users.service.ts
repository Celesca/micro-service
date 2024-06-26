import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
  ) {}

  getUsers(): Observable<string> {
    return this.userClient.send({ cmd: 'get/users' }, {});
  }

  getUserById(id: string): Observable<string> {
    return this.userClient.send({ cmd: 'get/usersById' }, id);
  }

  postUsers(user: CreateUserDto): Observable<string> {
    return this.userClient.send({ cmd: 'post/users' }, user);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userClient.send({ cmd: 'update/users' }, { id, updateUserDto });
  }

  remove(id: string) {
    return this.userClient.send({ cmd: 'delete/users' }, id);
  }
}
