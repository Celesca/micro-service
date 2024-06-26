import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  productName: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  category: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
