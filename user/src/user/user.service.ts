import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {

    getAllUsers() {
        return 'This action returns all users';
    }

    createNewUser(user: CreateUserDto): CreateUserDto {
        const newUser = { ... user};
        return newUser;

    }
}
