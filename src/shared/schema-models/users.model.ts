import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Base } from './base.model';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends Base {
  @Prop()
  uuid: string;

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

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
