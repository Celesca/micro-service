import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrdersService {
  constructor(
    @Inject('ORDER_SERVICE') private readonly orderClient: ClientProxy 
  ) {}

  create(createOrderDto: CreateOrderDto) {
    return this.orderClient.send({ cmd: 'create/order' }, createOrderDto);
  }

  findAll() {
    return this.orderClient.send({ cmd: 'get/orders' }, {});
  }

  findOne(id: string) {
    return this.orderClient.send({ cmd: 'get/orderById' }, id);
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.orderClient.send({ cmd: 'update/order' }, { id, updateOrderDto });
  }

  remove(id: string) {
    return this.orderClient.send({ cmd: 'delete/order' }, id);
  }
}
