import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.userModel
        .findOne({ username: createUserDto.username })
        .exec();
      if (user) {
        throw new BadRequestException('Username already exists');
      }
      const result = new this.userModel(createUserDto);
      return result.save();
    } catch (error) {
      return { error };
    }
  }

  async findAll() {
    try {
      const result = this.userModel.find().exec();
      if (!result) {
        throw new NotFoundException('No users found');
      }
    } catch (error) {
      return { error };
    }
  }

  async findOne(id: string) {
    try {
      const result = await this.userModel.findById(id).exec();
      console.log(result);
      if (!result) {
        throw new NotFoundException('User not found');
      }
      return result;
    } catch (error) {
      return { error };
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    console.log(updateUserDto);
    const result = this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
    return result;
  }

  async remove(id: string) {
    try {
      const result = await this.userModel.findByIdAndDelete(id).exec();
      if (!result) {
        throw new NotFoundException('User not found');
      }
      return { message: 'Delete successful' };
    } catch (error) {
      return { error };
    }
  }
}
