import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PolicyStatus } from '../enums';
import { Customer } from './customers.model';
import { Policies } from './policies.model';
import { Base } from './base.model';

export type CustomerPoliciesDocument =
  mongoose.HydratedDocument<CustomerPolicies>;

@Schema()
export class CustomerPolicies extends Base {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: '_id' })
  policy_type: Policies;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: '_id' })
  customer_id: Customer;

  @Prop({ required: true })
  policy_contract_id: string;

  @Prop({ required: true })
  started_date: Date;

  @Prop({ required: true })
  expires_in: Date;

  @Prop({ required: true })
  policy_status: PolicyStatus;
}

export const CustomerPolicieschema =
  SchemaFactory.createForClass(CustomerPolicies);
