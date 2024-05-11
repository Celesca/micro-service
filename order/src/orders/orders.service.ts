import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Connection } from 'mysql2';
import { InjectClient } from 'nest-mysql';

@Injectable()
export class OrdersService {
  constructor(@InjectClient() private readonly connection: Connection) {}
  async create(createOrderDto: CreateOrderDto) {
    const query =
      'INSERT INTO orders (product_id, user_id, quantity, price) VALUES (?, ?, ?, ?)';
    const values = [
      createOrderDto.product_id,
      createOrderDto.user_id,
      createOrderDto.quantity,
      createOrderDto.price,
    ];

    const result = await this.connection.query(query, values);
    return {
      message: 'Order created successfully',
      order_id: result[0].insertId,
    };
  }

  async findAll() {
    const query = 'SELECT * FROM orders';
    const result = await this.connection.query(query);
    return result[0];
  }

  async findOne(id: string) {
    const query = 'SELECT * FROM orders WHERE id = ?';
    const values = [id];
    const result = await this.connection.query(query, values);
    try {
      if (result[0].length === 0) {
        throw new NotFoundException('Order not found');
      }
      return result[0];
    } catch (error) {
      return { error };
    }
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order = await this.connection.query(
      'SELECT * FROM orders WHERE id = ?',
      [id],
    );
    try {
      if (order[0].length === 0) {
        throw new NotFoundException('Order not found');
      }

      const currentOrder = order[0][0];

      const product_id = updateOrderDto.product_id || currentOrder.product_id;
      const user_id = updateOrderDto.user_id || currentOrder.user_id;
      const quantity = updateOrderDto.quantity || currentOrder.quantity;
      const price = updateOrderDto.price || currentOrder.price;

      const query =
        'UPDATE orders SET product_id = ?, user_id = ?, quantity = ?, price = ? WHERE id = ?';
      const values = [product_id, user_id, quantity, price, id];

      await this.connection.query(query, values);
      return { message: 'Order updated successfully', order_id: id };
    } catch (error) {
      return { error };
    }
  }

  async remove(id: string) {
    try {
      const query = 'DELETE FROM orders WHERE id = ?';
      const values = [id];
      const result = await this.connection.query(query, values);
      if (result[0].affectedRows === 0) {
        throw new NotFoundException('Order not found');
      }

      return { message: 'Order deleted successfully', order_id: id };
    } catch (error) {
      // Return status code 404 if order is not found
      return { error };
    }
  }
}
