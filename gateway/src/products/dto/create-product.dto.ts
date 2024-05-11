import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  productName: string;

  @IsNumber()
  price: number;

  @IsNumber()
  amount: number;

  @IsString()
  category: string;
}
