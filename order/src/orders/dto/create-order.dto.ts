import { IsString, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  product_id: string;

  @IsString()
  user_id: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;
}
