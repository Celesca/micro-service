import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {

    private readonly users = [
        { username: 'John Doe', password: 'password', age: 25},
        { username: 'Jane Doe', password: 'password', age: 30},
    ]

    getAllUsers() {
        return this.users;
    }

    createNewUser(user: CreateUserDto) {
        this.users.push(user);
        return this.users;

    }
}
