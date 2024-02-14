import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { PolicyTypes } from '../enums';

export type PoliciesDocument = HydratedDocument<Policies>;

@Schema()
export class Policies {
  @Prop({ required: true })
  policy_type: PolicyTypes;
}

export const PoliciesSchema = SchemaFactory.createForClass(Policies);
