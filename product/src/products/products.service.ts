import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const product = await this.productModel
        .findOne({
          productName: createProductDto.productName,
        })
        .exec();
      if (!product) {
        throw new BadRequestException('Product already exists!');
      }
      const newProduct = new this.productModel(createProductDto);
      return newProduct.save();
    } catch (error) {
      return { error };
    }
  }

  async findAll() {
    try {
      const result = await this.productModel.find().exec();
      if (!result) {
        throw new NotFoundException('No products found!');
      }
      return result;
    } catch (error) {
      return { error };
    }
  }

  async findOne(id: string) {
    const result = await this.productModel.findById(id).exec();
    try {
      if (!result) {
        throw new NotFoundException('Product not found!');
      }
      return result;
    } catch (error) {
      return { error };
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      const product = await this.productModel
        .findByIdAndUpdate(id, updateProductDto, { new: true })
        .exec();
      if (!product) {
        throw new NotFoundException('Product not found!');
      }
      return product;
    } catch (error) {
      return { error };
    }
  }

  async remove(id: string) {
    try {
      const result = await this.productModel.findByIdAndDelete(id).exec();
      if (!result) {
        throw new NotFoundException('Product not found!');
      }
      return { message: 'Delete successful' };
    } catch (error) {
      return { error };
    }
  }
}
