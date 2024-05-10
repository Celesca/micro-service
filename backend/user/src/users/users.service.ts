import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) : Promise<User> {
    const user = await this.userModel.findOne({ username: createUserDto.username }).exec();
    if (user) {
      throw new BadRequestException('Username already exists');
    }
    const result = new this.userModel(createUserDto);
    return result.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    try {
      const result = this.userModel.findById(id).exec();
      if (!result) {
        throw new NotFoundException('User not found');
      }
      return result;
    } catch (error) {
      throw error;
    }

  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const result = this.userModel.findByIdAndUpdate(
      id, updateUserDto, {new: true})
      .exec();
    return result;
  }

  async remove(id: string) {
    try {
      const result = await this.userModel.findByIdAndDelete(id).exec();
      if (!result) {
        throw new NotFoundException('User not found');
      }
      return { message: 'Delete successful' }
    } catch (error) {
      throw error;
    }

  }
}
