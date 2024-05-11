import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_SERVICE') private readonly productClient: ClientProxy,
  ) {}

  create(createProductDto: CreateProductDto) {
    return this.productClient.send({ cmd: 'post/products' }, createProductDto);
  }

  findAll() {
    return this.productClient.send({ cmd: 'get/products' }, {});
  }

  findOne(id: string) {
    return this.productClient.send({ cmd: 'get/productsById' }, id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productClient.send(
      { cmd: 'update/products' },
      { id, updateProductDto },
    );
  }

  remove(id: string) {
    return this.productClient.send({ cmd: 'delete/products' }, id);
  }
}
