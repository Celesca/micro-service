import { Controller } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @MessagePattern({ cmd: 'post/products' })
  create(@Payload() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @MessagePattern({ cmd: 'get/products' })
  findAll() {
    return this.productsService.findAll();
  }

  @MessagePattern({ cmd: 'get/productsById' })
  findOne(@Payload() id: string) {
    return this.productsService.findOne(id);
  }

  @MessagePattern({ cmd: 'update/products' })
  update(
    @Payload() payload: { id: string; updateProductDto: UpdateProductDto },
  ) {
    return this.productsService.update(payload.id, payload.updateProductDto);
  }

  @MessagePattern({ cmd: 'delete/products' })
  remove(@Payload() id: string) {
    return this.productsService.remove(id);
  }
}
