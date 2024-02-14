import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Base } from './base.model';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer extends Base {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  id_number: string;

  @Prop()
  date_of_birth: string;

  @Prop()
  gender: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  address: string;

  @Prop()
  celphone: string;
}

export const Customerchema = SchemaFactory.createForClass(Customer);
