import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
    @Inject('PRODUCT_SERVICE') private readonly productClient: ClientProxy,
    @Inject('ORDER_SERVICE') private readonly orderClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getUser(): Observable<string> {
    return this.userClient.send({ cmd: 'get/users' }, {});
  }

  getProduct(): Observable<string> {
    return this.productClient.send({ cmd: 'get/product' }, {});
  }

  getOrder(): Observable<string> {
    return this.orderClient.send({ cmd: 'get/order' }, {});
  }
}
