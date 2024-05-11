import { Controller } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @MessagePattern({ cmd: 'create/order' })
  create(@Payload() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @MessagePattern({ cmd: 'get/orders' })
  findAll() {
    return this.ordersService.findAll();
  }

  @MessagePattern({ cmd: 'get/orderById' })
  findOne(@Payload() id: string) {
    return this.ordersService.findOne(id);
  }

  @MessagePattern({ cmd: 'update/order' })
  update(@Payload() payload: { id: string; updateOrderDto: UpdateOrderDto }) {
    return this.ordersService.update(payload.id, payload.updateOrderDto);
  }

  @MessagePattern({ cmd: 'delete/order' })
  remove(@Payload() id: string) {
    return this.ordersService.remove(id);
  }
}
