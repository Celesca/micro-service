import { IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  readonly transactionId: number;

  @IsString()
  readonly productId: string;

  @IsNumber()
  readonly quantity: number;

  @IsString()
  readonly userId: string;
}
